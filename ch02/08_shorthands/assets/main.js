new Vue({
    el: '#app',
    data: {
        link: "https://www.google.co.za",
        counter: 0,
        secondCounter: 0
    },
// The difference is that computed properties are cached based on their dependencies. A computed property will only re-evaluate when some of its dependencies have changed. This means as long as counter has not changed, multiple access to the output computed property will immediately return the previously computed result without having to run the function again.
    computed: {
        output: function(){
            console.log('Computed');
            return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
        }
    },
    watch: {
// Watch is used to "watch" a property and whenever the value changes of that property an action can be bound to that. Usefull in
 // cases where async calls are made

// Note Vue will automatically pass the value from the property
        counter: function(){
            // need to assign this to a var to keep scope applied otherwise vue will regard this as 0 already
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            },2000)
        }
    },
    methods: {
        result: function() {
            console.log('Method');
            return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
        }
    }
});