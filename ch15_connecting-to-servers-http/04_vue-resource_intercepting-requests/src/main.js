import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-http-82b64.firebaseio.com/data.json';
// 1. Setting up a new interceptor rule. These rules will fire on all requests
  // a. arg is the request and whatever needs to happen next
  // b. passing the request (es6 callback) to the callback to be processed
Vue.http.interceptors.push((request,next) => {
  console.log(request);
  // 2. We can also modify the request thus changing POST requests tot PUT requests
  if(request.method == 'POST'){
    request.method = 'PUT';
  }
  console.log(request);
  // a. continue with the request
  next();
  // 3. Thus in the firebase app our data will now be overwritten hence the PUT and also not no unique identifier
});

new Vue({
  el: '#app',
  render: h => h(App)
})
