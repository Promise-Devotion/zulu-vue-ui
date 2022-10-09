<template>
  <button @click="toogle" :class="{ checked: value }"><span></span></button>
</template>
<script lang="ts">
import { ref } from "vue";

export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toogle = () => {
      context.emit("input", !props.value);
    };
    return { toogle };
  },
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: #dcdfe6;
  border-radius: $h / 2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 250ms;
}
.checked {
  background: #409eff;
}
.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
</style>
