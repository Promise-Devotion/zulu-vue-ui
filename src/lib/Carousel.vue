<template>
  <div class="zulu-carousel">
    <li v-for="(item, index) in data" :key="index">
      <img :src="item.url" alt="" />
    </li>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps({
    data: Array,
    default: () => {
      return [];
    },
  });
</script>
<style lang="scss">
  .zulu-carousel {
    border: 1px solid red;
  }
</style>
