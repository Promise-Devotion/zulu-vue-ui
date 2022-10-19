<template>
  <div>
    <h1 id="switch-开关" tabindex="-1">Switch 开关</h1>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <h2>基础用法</h2>
    <p>绑定 v-model 到一个 Boolean 类型的变量。</p>
    <Switch v-model:value="y" />
    <Switch v-model:value="x" disabled />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import Switch from "../lib/Switch.vue";
  const y = ref(true);
  const x = ref(false);
</script>
<style lang="scss" scoped></style>
