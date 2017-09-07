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

  // 3. continue with the request - you can also run code in next. Thus view the i.e response. Vue passes response automatically
  next( response => {
    // a. you can also modify the response and i.e change structure or run logic. Carefull to do this though
    // b. Note we are changing this so our fecthdata still works in app.vue. Because before we changed the method from post to
          // put we received an arr and not an object
    response.json = () => { return {messages: response.body} }
  });

  // 4. Thus in the firebase app our data will now be overwritten hence the PUT and also not no unique identifier
});

// To conclude: we can use above functions to intercept requests and responses
new Vue({
  el: '#app',
  render: h => h(App)
})
