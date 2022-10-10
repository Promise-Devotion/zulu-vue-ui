<template>
  <div class="content">
    <aside>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">switch组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">button组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">dialog组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">tabs组件</router-link>
        </li>
      </ol>
    </aside>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "Doc",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
aside {
  background: #d0ecf5;
  width: 200px;
  padding: 16px;
  position: fixed;
  left: 0;
  top: 60px;
}
</style>
