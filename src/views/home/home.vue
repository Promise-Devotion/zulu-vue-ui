<template>
  <div class="home-contain">
    <div class="mian-contain">
      <h1>zulu-ui</h1>
      <h2>一个厉害的vue ui框架</h2>
    </div>
    <div>
      <p class="zulu-actions">
        <a
          href="https://github.com/Promise-Devotion/zulu-vue-ui"
          target="_blank"
          >GitHub</a
        >
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    setup() {
      return {};
    },
    name: "Home",
    data() {
      return {};
    },
    methods: {},
  };
</script>
<style lang="scss" scoped>
  .home-contain {
    // background: chartreuse; //留待备用
    background-color: #d0ecf5;
    padding: 50px 0 50px 0;
    h1 {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .mian-contain {
      text-align: center;
    }
    .zulu-actions {
      a {
        text-decoration-line: none;
        display: inline-block;
        line-height: 20px;
        padding: 4px 10px;
        border-radius: 10px;
        // border: 1px solid red;
        margin-right: 10px;
        background: #ffffff;
      }
    }
  }
</style>
