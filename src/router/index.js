import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base:  process.env.VUE_APP_NAME,
    routes,
})
