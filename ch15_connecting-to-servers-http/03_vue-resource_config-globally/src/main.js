import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'

Vue.use(VueResource);
// 1. Setting up constants globally for vue resource. Note not having the $http since we only need that once we access the method from inside a component.
// 2. Setting up the root option on the vue resource option so that we do not need to pass the url in our requests anymore
  // a. can setup additional options i.e options.header or options.content-type etc
Vue.http.options.root = 'https://vue-http-82b64.firebaseio.com/data.json';

new Vue({
  el: '#app',
  render: h => h(App)
})
