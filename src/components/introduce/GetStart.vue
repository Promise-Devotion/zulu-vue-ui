<template>
  <article class="markdown-body">
    <h1>开始使用</h1>
    <p>请先<a href="#/introduction/install">安装</a>本组件库</p>
    <p>
			然后在你的代码中加入下面的代码
		</p>
		<p>
			<pre><code>import { Button } from "zulu-vue-ui";</code></pre>
		</p>
		<p>就可以使用zulu提供的组件了</p>
		<h2>Vue单例</h2>
		<p>
			<pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Switch v-model:value="switchValue" /&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script lang="ts" setup&gt;
  import { ref } from "vue";
  import Switch from "../lib/Switch.vue";
  const switchValue = ref(false);
&lt;/script&gt;
&lt;style lang="scss" scoped&gt;&lt;/style&gt;
</code></pre>
		</p>
		<p>请开始<a href="#/doc">使用</a>吧</p>
  </article>
</template>
