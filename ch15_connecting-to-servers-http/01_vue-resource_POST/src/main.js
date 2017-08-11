import Vue from 'vue'
import App from './App.vue'
// 2. Importing lib from our node_modules
import VueResource from 'vue-resource'

// 3. Use fn to extend vue functionality
// 4. Using firebase console - google firebase
  // ps remember to make read/write rules to true for dev purposes otherwise you will need to connect to db with urs/pass
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
