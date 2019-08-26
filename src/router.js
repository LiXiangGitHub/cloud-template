import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base:  process.env.VUE_APP_NAME,
    routes: [
        {
            path: '/base',
            name: 'base',
            meta: {
                icon: 'md-funnel',
                title: '基础资料'
            },
            component: Home
        }
    ]
})
