
// 4. Creating a new component to extend the vue instance. First argument will be el, 2nd will be data,methods etc
    // note as a rule of thumb always add a prefix to the components and classes to prevent code scope issues
Vue.component('my-custom-tagname',{
  // Data now needs to be a function that return the data in an object form This is not to interfere with vue's default data set
    data: function(){
    return {status: 'Component Critical'}
  },
  template: '<p>Server Status: {{ status }} </p>'
});

new Vue({
  el:'#app',
  data:{
    status: 'default critical'
  },
  // 1. Note the aim is to specify our own template to be rendered so that we can re-use the same vue instance over multiple places
  template: '<p>Server Status: {{ status }} </p>'
})

new Vue({
  el:'#app3',
})