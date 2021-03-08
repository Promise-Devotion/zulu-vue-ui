<template>
  <div>home <button @click="gotodetail">去详情</button></div>
</template>
<script lang="ts">
export default {
  name: 'Home',
  data() {
    return {}
  },
  methods: {
    gotodetail() {
      this.$router.push('/detail')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
