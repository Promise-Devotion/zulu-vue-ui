<template>
  <div>detail <button @click="backdetail">回首页</button></div>
</template>
<script>
export default {
  name: 'Detail',
  data() {
    return {}
  },
  methods: {
    backdetail() {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
