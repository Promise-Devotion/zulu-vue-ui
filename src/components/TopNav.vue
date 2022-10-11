<template>
  <div class="top-nav flex-box">
    <router-link to="/">
      <img class="logo" src="../assets/images/logo.png" alt="#d0ecf5" />
    </router-link>
    <ul class="flex-box nav-contain">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  name: "TopNav",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.top-nav {
  background: #d0ecf5;
  position: sticky;
  height: 60px;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: inline-block;
    height: 20px;
  }
  .nav-contain {
    li {
      margin-right: 10px;
    }
  }
}
</style>
