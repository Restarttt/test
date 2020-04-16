<template>
  <!-- 测试测试 -->
  <!-- <router-link>该标签是一个vue-router中已经内置的组件，它会被渲染成一个a标签 -->
  <!-- <router-view>该标签会根据当前的路径，动态渲染出不同的组件-->
  <div>
    <p>这是主页</p>
    <router-link to="/about">
      <p>跳转点这</p>
    <router-view/>
    </router-link>
    <!-- / / 路由展现的视图， 只有有这个标签才能显示出路由中的东西  -->
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style less="lang" scoped>
</style>