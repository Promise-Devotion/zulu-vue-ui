<template>
  <button
    @click="toogle"
    class="zulu-switch"
    :class="{ 'zulu-checked': value }"
  >
    <span></span>
  </button>
</template>
<script lang="ts" setup>
  let emit = defineEmits(["update:value"]);
  const props = defineProps({
    value: Boolean,
  });

  const toogle = (): void => {
    emit("update:value", !props.value);
  };
</script>
<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .zulu-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background-color: #dcdfe6;
    border-radius: calc($h / 2);
    position: relative;
    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: calc($h2 / 2);
      transition: left 250ms;
    }
    &.zulu-checked {
      background: #409eff;
      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }
  }
</style>
