// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './common/style/index.css';

Vue.config.productionTip = false;
/* eslint-disable no-new */
// 写法一
new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    // 空的实例放到根组件下，所有的子组件都能调用
    Bus: new Vue()
  }
}).$mount('#app');

// 写法2
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// });
