// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routers from './routers'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
//自定义指令 directive  [全局API]
// Vue.directive("yanse",{
//   bind(el,binding,vnode){
//     el.style.color = "#" + Math.random().toString(16).slice(2,8)
//   }
// })

// Vue.directive("beijing",{
//   bind(el,binding,vnode){
//     if(binding.value == "wide"){
//       el.style.maxWidth = "1200px";
//     }else if(binding.value == "naarle"){
//       el.style.maxWidth = "560px"
//     }

//     //自定义指令（传参）
//     if(binding.arg == "clumn"){
//       //el.style.backgroundColor = "red";
//     }
//   }
// })

// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })
// Vue.filter("snippet",function(value){
//   return value.slice(0,100) + "...";
// })


//创建路由
const router = new VueRouter({
  routes:Routers,
  mode:"history"
})
    


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
