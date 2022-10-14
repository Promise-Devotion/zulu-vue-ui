<template>
  <div class="content flex-box">
    <aside>
      <h2 class="sidebar-group-title">Basic 基础组件</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">switch开关</router-link>
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
    <div class="doc-contain">
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
  .content {
    aside {
      background: #d0ecf5;
      width: 200px;
      height: calc(100vh - 92px);
      overflow-y: auto;
      padding: 16px 0;
      .sidebar-group-title {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 8px;
        line-height: 24px;
        text-align: left;
        padding-left: 32px;
      }
      ol {
        li {
          text-align: left;
          a {
            display: block;
            text-decoration: none;
            padding: 10px 16px 10px 40px;
            color: blue;
          }
          .router-link-exact-active {
            background-color: white;
            color: #000;
          }
        }
      }
    }
    .doc-contain {
      flex: 1;
      padding: 64px 64px 42px;
    }
  }
</style>
