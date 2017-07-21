new Vue({
    el: '#app',
    data: {
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
    methods: {
        result: function() {
            console.log('Method');
            return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
        }
    }
});