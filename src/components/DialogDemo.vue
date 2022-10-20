<template>
  <div>dialog</div>
  <h3>例子1</h3>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import Dialog from "../lib/Dialog.vue";
  import Button from "../lib/Button.vue";
  const x = ref(false);
  const toggle = () => {
    x.value = !x.value;
  };
  const f1 = () => {
    return false;
  };
  const f2 = () => {};
</script>
<style lang="scss" scoped></style>
