import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Route from './router'
Vue.config.productionTip = false

Vue.use(VueRouter);

const route = new VueRouter({
  routes:Route,
  mode:'history'
});
new Vue({
  render: h => h(App),
  router:route
}).$mount('#app')
