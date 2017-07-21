new Vue({
    el: '#app',
    data: {
        title:'Hello World',
    },
    methods: {
        changeTitle: function(event){
            this.title = event.target.value; // changing title with the help of vjs event object passed to method
        }
    }
});