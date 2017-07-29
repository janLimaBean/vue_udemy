import Vue from 'vue'
import App from './App.vue'
// 1. import statment for webpack
import Home from './Home.vue'

// 2. registering new component globally, tagname and import var as arguments
Vue.component('app-server-status', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
