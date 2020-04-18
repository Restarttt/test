<template>
  <!-- 测试测试 -->
  <div class="about">
    <!-- <div class="home-page">
      <p>这是主页</p>
        <p>跳转点这</p>
      / / 路由展现的视图， 只有有这个标签才能显示出路由中的东西 
    </div>-->
    <p>这是其他</p>
    <p class="jump">跳转到了</p>
    <p @click="go()" class="jump-back">跳回去点这</p>
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
    go() {
      return this.$router.push("/");
      this.$store.commit('NAME')
    }
  }
};
</script>

<style less="lang" scoped>
.about {
  margin: 0 auto;
  width: 200px;
  margin: 100px auto;
}
.about p {
  font-size: 20px;
  color: #00ff00;
  font-weight: 500;
  padding: 5px 0;
}
p.jump-back {
  text-shadow: 5px 5px 6px orange;
  text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000; /* (文字凸起效果)可以通过","添加多个阴影 */
  text-shadow: -1px -1px 1px #000, 1px 1px 1px #fff; /* (文字凹陷效果) */
  color: #ccc; /* 字体颜色放在text-shadow下面才生效 */
}
</style>