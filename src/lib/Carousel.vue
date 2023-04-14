<template>
  <div class="zulu-carousel">
    <ul
      class="zulu-carousel-contain"
      :style="{ width: links.length * 100 + 'px' }"
    >
      <!-- v-for="(item, index) in links"
        :key="index" -->
      <li class="zulu-carousel-item">
        <img alt="" class="img" style="background: red" />
        <!-- :src="item.url" -->
      </li>
      <li class="zulu-carousel-item">
        <img alt="" class="img" style="background: blue" />
        <!-- :src="item.url" -->
      </li>
      <li class="zulu-carousel-item">
        <img alt="" class="img" style="background: green" />
        <!-- :src="item.url" -->
      </li>
      <li class="zulu-carousel-item">
        <img alt="" class="img" style="background: yellow" />
        <!-- :src="item.url" -->
      </li>
    </ul>
    <div class="zulu-dot">
      <span
        v-for="(item, index) in links"
        :key="item.id"
        class="zulu-dot-item"
        >{{ index + 1 }}</span
      >
    </div>
  </div>
</template>
<script setup lang="ts">
  import { PropType } from "vue";
  type Link = {
    title: string;
    id: string;
    url: string;
    subtile: string;
  };
  defineProps({
    links: {
      type: Array as unknown as PropType<Link[]>,
      default: () => [],
    },
  });
</script>
<style lang="scss" scoped>
  .zulu-carousel {
    width: 600px;
    height: 300px;
    overflow: hidden;
    margin: 0 auto;
    border: 1px solid red;
    position: relative;
    .zulu-carousel-contain {
      display: flex;
      width: 100%;
      height: 300px;
      margin-left: 0%;
      transition: margin-left 0.8s;
      .zulu-carousel-item {
        flex: 1;
        height: inherit;
        list-style: none;
        .img {
          display: block;
          width: 100%;
          height: 100%;
          // background-color: pink;
        }
      }
    }

    .zulu-dot {
      position: absolute;
      bottom: 6px;
      left: 50%;
      transform: translate(-50%, 0);
      .zulu-dot-item {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        color: red;
        cursor: pointer;
        border: 1px solid red;
        & + & {
          margin-left: 18px;
        }
      }
    }
  }
</style>
