import Vue from 'vue'
import App from './App.vue'

// 2.Creating a new global mixin
Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  }
});
/*
This will generate the following log
------------------------------------
Rendered from the new VUE below            | main.js?3479:7 Global Mixin - Created Hook
Rendered for the first comp in App.vue     | main.js?3479:7 Global Mixin - Created Hook
Rendered for the child comp in App.vue     | main.js?3479:7 Global Mixin - Created Hook
Rendered from the created hook on List.vue | List.vue?a84a:24 List created hook
*/
new Vue({
  el: '#app',
  render: h => h(App)
})
