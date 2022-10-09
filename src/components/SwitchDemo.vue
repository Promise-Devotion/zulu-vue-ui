<template>
  <div>
    <Switch :value="y" @input="y = $event" />
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
