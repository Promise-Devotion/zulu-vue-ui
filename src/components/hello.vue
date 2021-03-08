<template>
  <div>
    hello
    <button @click="gotodemo">跳转demo</button>
  </div>
</template>
<script>
export default {
  name: 'Hello',
  data() {
    return {}
  },
  methods: {
    gotodemo() {
      this.$router.push('/demo')
    }
  }
}
</script>