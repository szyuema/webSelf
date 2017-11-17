import Vue from 'vue';
import Router from 'vue-router';
// import header from '../components/header/header.vue';
import index from '../components/index/index.vue';
import error from '../components/404/error.vue';
import about from '../components/about/about.vue';

import swiper from '../components/demo/swiper/swiper.vue';
import canvas from '../components/demo/canvas/canvas.vue';
import loading from '../components/demo/loading/loading.vue';
import table from '../components/demo/table/table.vue';

Vue.use(Router);

const routes = [
  {
    path: '/index',
    component: index,
    children: [
      {
        path: '/index',
        component: index,
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'c',
    component: about,
    meta: {
      keepalive: true,
      title: '关于我们'
    }
  },
  {
    path: '/error',
    component: error,
    meta: {
      title: 'error'
    }
  },
  {
    path: '/canvas',
    component: canvas,
    meta: {
      keepalive: true,
      title: 'canvas'
    }
  },
  {
    path: '/swiper',
    component: swiper,
    meta: {
      title: 'swiper'
    }
  },
  {
    path: '/loading',
    component: loading,
    meta: {
      title: 'loading'
    }
  },
  {
    path: '/table',
    component: table,
    meta: {
      title: 'table'
    }
  }
];
var router = new Router({
  routes // （缩写）相当于 routes: routes
});
router.beforeEach((to, from, next) => {
  document.title = to.meta && to.meta.title || 'mayue';
  next();
  // let ua = navigator.userAgent;
  // if (/\bMicroMessenger\/([\d]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
  //   var i = document.createElement('iframe');
  //   i.src = '/favicon.ico';
  //   i.style.display = 'none';
  //   i.onload = function () {
  //     setTimeout(function () {
  //       i.remove();
  //     }, 9);
  //   };
  //   document.body.appendChild(i);
  // }
});
router.push('/error');
export default router;
