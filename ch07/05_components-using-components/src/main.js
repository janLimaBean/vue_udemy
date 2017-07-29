import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import ServerStatus from './ServerStatus.vue'

// 3. Registering the component from the Home.vue
Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})

// 1. Idea is to create a page where we can manage multiple server statuses
// 2. Remember that app.vue is the main vue branch where everything starts because the es6 function binds the                applicationCache.vue to the el #app

