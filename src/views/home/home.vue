<template>
  <top-nav></top-nav>
  <div>home <button @click="gotodetail">去详情</button></div>
</template>
<script lang="ts">
import TopNav from '../../components/TopNav.vue'
export default {
  name: 'Home',
  components: {
    TopNav
  },
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
