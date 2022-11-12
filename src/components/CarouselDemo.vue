<template>
  <div>
    <h4>CarouselDemo</h4>
    <Carousel :data="dataList" />
  </div>
</template>
<script setup lang="ts">
  import { reactive } from "vue";
  import Carousel from "../lib/Carousel.vue";
  interface Idata {
    title: string;
    id: string;
    url: string;
    subtile: string;
  }

  let dataList = reactive<Idata[]>([
    {
      id: "0001",
      title: "lunbo1",
      url: "https://scpic.chinaz.net/files/pic/pic9/201910/zzpic20739.jpg",
      subtile: "",
    },
    {
      id: "0002",
      title: "lunbo2",
      url: "https://scpic.chinaz.net/files/pic/pic9/201910/zzpic20739.jpg",
      subtile: "",
    },
    { id: "0003", title: "lunbo3", url: "", subtile: "" },
    { id: "0004", title: "lunbo4", url: "", subtile: "" },
  ]);
</script>
<style lang="scss"></style>
