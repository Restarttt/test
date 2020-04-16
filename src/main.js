//加载启动VUE（入口）
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import './style/common'
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
})


// 3） 在Vue实例中挂载创建的路由实例
// 3.将router对象传入VUE的实例
new Vue({
        router,
        store,
    }).$mount('#ZH')
    //mount挂载这个zh这个实例上