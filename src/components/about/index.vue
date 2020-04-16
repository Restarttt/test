<template>
  <!-- 测试测试 -->
  <div>
    <p>这是其他</p>
    <p>跳转到了</p>
    <p @click="go()">跳回去点这</p>

  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  methods: {
      go(){
          return this.$router.push('/')
      }
      

  }
};
</script>

<style less="lang" scoped>
</style>