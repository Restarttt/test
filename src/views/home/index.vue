<template>
  <!-- 测试测试 -->
  <!-- <router-link>该标签是一个vue-router中已经内置的组件，它会被渲染成一个a标签 -->
  <!-- <router-view>该标签会根据当前的路径，动态渲染出不同的组件-->
  <div class="home">
    <div class="home-page">
      <p>这是主页</p>
      <router-link to="/about">
        <p class="jump">跳转点这</p>
        <router-view />
      </router-link>
      <!-- / / 路由展现的视图， 只有有这个标签才能显示出路由中的东西  -->
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  computed:{
    

  },
  methods: {}
};
</script>

<style less="lang" scoped>
.home {
  width: 100%;
  margin: 0 auto;
}
.home-page {
  width: 200px;
  margin: 100px auto;
}
.home-page p {
  font-size: 20px;
  color: #00ff00;
  font-weight: 500;
  padding: 5px 0;
}
p.jump {
  /* text-shadow: 5px 5px 3px #ff00ff;
  box-shadow: 3px 3px 30px #888888; */
  text-shadow: 5px 5px 6px orange;
  text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000; /* (文字凸起效果)可以通过","添加多个阴影 */
  text-shadow: -1px -1px 1px #000, 1px 1px 1px #fff; /* (文字凹陷效果) */
  color: #ccc; /* 字体颜色放在text-shadow下面才生效 */
}
</style>