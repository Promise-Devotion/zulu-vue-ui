# 开始使用

请先[安装](<#/introduction/install)本组件库

然后在你的代码中加入下面的代码

```
import { Button } from "zulu-vue-ui";

```

就可以使用 zulu 提供的组件了

## Vue 单例

```
<template>
<div>
<Switch v-model:value="switchValue" />
</div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
const switchValue = ref(false);
</script>
<style lang="scss" scoped></style>
```
