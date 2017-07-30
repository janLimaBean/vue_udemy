import Vue from 'vue'
import App from './App.vue'

// 1. Setting up new constant that will serve basic vue build in functions if you do not specify anything
// export const eventBus = new Vue();

export const eventBus = new Vue({
  // 8. Note you can also export common helper functions shared between components
  methods:{
    changeAge(age){
      this.$emit('ageWasEdited',age);
    }
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
