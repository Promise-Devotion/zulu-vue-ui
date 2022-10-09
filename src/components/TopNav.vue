<template>
  <div class="top-nav flex-box">
    <div>logo</div>
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
  background: pink;
  position: sticky;
  // height: 40px;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  .nav-contain {
    li {
      margin-right: 10px;
    }
  }
}
</style>
