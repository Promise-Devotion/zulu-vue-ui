<template>
  <div>
    <p>button</p>
    <h2>例子</h2>
    <div>
      <Button>你好</Button>
      <Button theme="button">你好</Button>
      <Button theme="link">你好</Button>
      <Button theme="text">你好</Button>
    </div>
    <h2>例子2 button类型大小</h2>
    <div>
      <Button theme="button" size="big">大大大</Button>
      <Button theme="button" size="normal">正正常</Button>
      <Button theme="button" size="normal">默默认</Button>
      <Button theme="button" size="small">小小小</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
<style lang="scss" scoped></style>
