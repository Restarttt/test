//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import test from '../views/home'
import about from '../components/about'
// 1. 通过Vue.use(插件)，安装插件
// 导入路由对象， 并且调用Vue.use(VueRouter)
Vue.use(Router)
Vue.use(VueRouter)


// 2.创建VueRounter 对象并导出
export default [{
        //  配置路由和组件之间的关系()
        // 创建路由实例，并且传入路由映射配置
        path: '/',
        name: 'test',
        component: test,
        children: [{
            path: '',
            component: r => require.ensure([], () => r(require('../views/home')), 'home')
        }, {
            path: '/item',
            component: r => require.ensure([], () => r(require('../views/item')), 'item')
        }],

    },
    {
        path: '/about',
        name: 'about',
        component: about,
    }
]


// const router = new VueRouter({ //将规则赋给路由的路径
//     mode: "history", //历史模式
//     base: process.env.BASE_URL,
//     routes,

// }); //创建


// export default router; //导出了才能被其他地方导入