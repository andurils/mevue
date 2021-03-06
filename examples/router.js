import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: (resolve) => require(['./components/HelloWorld.vue'], resolve), //使用vue的异步组件技术 , 可以实现按需加载 .
  },
];

routes.push({
  path: '/test',
  name: 'test',
  component: () => import('./docs/test.md'),
});

routes.push({
  path: '/button',
  name: 'button',
  component: () => import('./docs/button.md'),
});
routes.push({
  path: '/layout',
  name: 'layout',
  component: () => import('./docs/layout.md'),
});

routes.push({
  path: '/jsx',
  name: 'jsx',
  component: () => import('./components/JSX.vue'),
});

export default new VueRouter({
  mode: 'hash',
  base: process.env.NODE_ENV !== 'production' ? '/' : '/me-vue-ui',
  routes,
});
