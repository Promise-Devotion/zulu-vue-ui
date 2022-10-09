<template>
  <div>
    <Switch v-model:value="y" />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: { Switch },
  setup(props) {
    const y = ref(false);
    return { y };
  },
};
</script>
<style lang="scss" scoped></style>
