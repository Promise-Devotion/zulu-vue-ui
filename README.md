# zulu-vue-ui

## 一套好用的 PC 端 Vue 组件库

> 本组件库仅供学习交流，请勿在生产环境中使用

## 安装

```
$ npm install zulu-vue-ui
$ yarn add zulu-vue-ui
```

## 使用

```javascript
<template>
  <div>
    <Switch v-model:value="switchValue" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import Switch from "zulu-vue-ui";
  const switchValue = ref(false);
</script>
```

需要注意的是，样式文件需要单独引入。

## 特别提醒

使用 zulu-vue-ui 时，需要使用 border-box 盒模型，否则会影响样式。代码示例：

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

如果您觉得还不错，请 star
