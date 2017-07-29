import Vue from 'vue'
import App from './App.vue'

new Vue({
  // 1. We still have to define a element where vue will render the template we created
  el: '#app',
  // 2. Render is a es6 function (we do not infer/call the default vue template) that will override the above elements content
  // 3. The function essentially takes a vue compiled template as an argument to be rendered
  render: h => h(App)
})
