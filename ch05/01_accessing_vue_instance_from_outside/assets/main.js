// Using normal JS var to populate vue model 1 data prop
var data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
      // 3. Note how we can get the current value from the Dom and use normal js proto functions to manipulate it.
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

// 1. Note the $data - this refers to the var property created by vue in JS. Thus the $data is the same as data in vue and is accessable outside the vue instance. Below is a test to prove this
console.log(vm1.$data === data);

// 4. Note that the heading changed from the data prop title to below and the changes again to the function updateTitle
// It is important to understand that on all rerenders on the DOM vue will use the values of the template thus using refs will  
    // be overwriten since its DOM manipulation ******
vm1.$refs.heading.innerText = 'Something else';
console.log(vm1);

setTimeout(function() {
// Note that if you assign your vm instance to a var that you can access the props from outside the vue instance
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 3000);


// 2.
// a. Vue automatically does the proxying for us in regards from vue instance to a var vm1 to the properties assigned to that var
// b. Vue also keeps track of the properties by setting up watchers (getters and setters - look at the var vm1 in console) 
      // on each property thus it is able to update the dom when some property changes.
// c. This is important to understand becuase adding an new property like below wont work because vue did not setup a watcher 
      //for that property because it was not there when the instance initialised. It will create the prop but not update it.
vm1.newProp = 'new';



var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChange: function() {

      vm1.title = 'Changed!';
    }
  }
});
console.log(vm2);

var vm3 = new Vue({
	template: '<h1>Hello!</h1>'
});

vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);

