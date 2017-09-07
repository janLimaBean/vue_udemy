import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-http-82b64.firebaseio.com/';

  Vue.http.interceptors.push((request,next) => {
  console.log(request);
  if(request.method == 'POST'){
    request.method = 'PUT';
  }
  console.log(request);

  next( response => {
    response.json = () => { return {messages: response.body} }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
