import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    linkActiveClass: 'is-active',
    routes: routers
});

// 路由拦截
router.beforeEach(({name, path, meta}, from, next) => {
    return next();
})

router.afterEach(route => {})


export default router;