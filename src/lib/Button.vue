<template>
  <!-- size 尺寸 string medium / small / mini 
	type 类型 string primary / success /warning / danger / info / text 
	plain 是否朴素按钮 boolean — false 
	round 是否圆角按钮 boolean — false 
	circle 是否圆形按钮 boolean — false 
	loading 是否加载中状态 boolean — false 
	disabled 是否禁用状态 boolean — false 
	icon 图标类名 string — — 
	autofocus 是否默认聚焦 boolean — false 
	native-type 原生type 属性 -->
  <button class="zulu-button" :class="classes">
    <slot />
  </button>
</template>
<script lang="ts" setup>
  import { computed } from "vue";
  const props = defineProps({
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
  });

  const { size, theme } = props;
  const classes = computed(() => {
    return {
      [`zulu-size-${size}`]: size,
      [`zulu-theme-${theme}`]: theme,
    };
  });
</script>
<style lang="scss">
  $h: 32px;
  $border-color: #d9d99d;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  .zulu-button {
    box-sizing: border-box;
    cursor: pointer;

    height: $h;
    border-radius: $radius;
    padding: 0 12px;
    outline: none;
    background: white;
    color: $color;
    white-space: nowrap;
    border: 1px solid $border-color;
    box-shadow: 0 1px 0 fade-out($color: #000000, $amount: 0.95);
    & + & {
      margin-left: 8px;
    }
    &:hover,
    &:focus {
      color: $color;
      border-color: $color;
    }
    &:focus {
      outline: none;
    }
    &::-moz-focus-inner {
      border: 0;
    }
    &.zulu-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;
      &:hover,
      &:focus {
        background: darken(white, 5%);
      }
    }
    &.zulu-theme-link {
      border-color: transparent;
      color: #40a9ff;
      background: transparent;
      padding: 2px;
      height: auto;
      &:hover,
      &:focus {
        color: lighten($blue, 10%);
      }
    }
    &.zulu-theme-button {
      &.zulu-size-big {
        height: 40px;
        padding: 12px 19px;
      }
      &.zulu-size-small {
        height: 24px;
        padding: 5px 11px;
        font-size: 12px;
      }
    }
    &.zulu-theme-link {
      &.zulu-size-big {
        font-size: 24px;
        height: 40px;
        padding: 12px 19px;
      }
      &.zulu-size-small {
        font-size: 14px;
        height: 24px;
        padding: 5px 11px;
        font-size: 12px;
      }
    }
  }
</style>
