// 1. Below is an example of registering a component globally
// Vue.component('my-custom-tagname',{
// 2. Instead now we will assign the component to a var - selector is removed from above
var cmp =  {
    data: function(){
    return {
      status: 'Local Component Critical'
    };
  },
  template: '<p>Server Status: {{ status }} </p>'
};

// Setting up global component
Vue.component('my-global-tagname',{
    data: function(){
    return {status: 'Global Component Critical'}
  },
  template: '<p>Server Status: {{ status }} </p>'
});

new Vue({
  el:'#app',
// 3. Registering a component locally to a vue instance
  components : {
    // first arguemnt is the el name, second is the cmp variable
    'my-custom-tagname': cmp
  }
});

new Vue({
  el:'#app2',
})

new Vue({
  el:'#app3',
})