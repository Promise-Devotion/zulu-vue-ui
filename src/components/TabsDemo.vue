<template>
  <div>tabs</div>
  <h2>例子1</h2>
  <Tabs v-model:selected="x">
    <Tab title="导航1">tab1</Tab>
    <Tab title="导航2234234234">tab23343432432</Tab>
  </Tabs>
</template>
<script lang="ts" setup>
  import Tabs from "../lib/Tabs.vue";
  import Tab from "../lib/Tab.vue";
  import { ref } from "vue";

  const x = ref("导航2234234234");
</script>
<style lang="scss" scoped></style>
