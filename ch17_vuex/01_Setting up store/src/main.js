import Vue from 'vue'
import App from './App.vue'
// 1. Install vuex with npm install vuex
// 2. Import vuex in the Store.js file

// 7. Import store const
import { store } from './store/store'

new Vue({
  el: '#app',
// 8. Register const as a prop - accesing store in Counter.vue
  store,
  render: h => h(App)
})
