<template>
  <div>
    Demo
    <button @click="backhello">返回</button>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {};
  },
  methods: {
    backhello() {
      this.$router.push("/");
    },
  },
};
</script>
