<template>
  <div class="content flex-box">
    <aside>
      <h2 class="sidebar-group-title">基础</h2>
      <ol>
        <li>
          <router-link to="/introduction/base">介绍</router-link>
        </li>
        <li>
          <router-link to="/introduction/install">安装</router-link>
        </li>
        <li>
          <router-link to="/introduction/get-start">快速开始</router-link>
        </li>
      </ol>
      <h2 class="sidebar-group-title">进阶</h2>
      <ol>
        <li>
          <router-link to="/introduction/updatelog">更新日志</router-link>
        </li>
      </ol>
    </aside>
    <div class="introduction-contain">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
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
    .introduction-contain {
      height: calc(100vh - 166px);
      overflow-y: auto;
      flex: 1;
      padding: 64px 64px 42px;
    }
  }
</style>
