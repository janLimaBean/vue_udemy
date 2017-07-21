new Vue({
    el: '#app',
    data: {
        title:'Hello World!!',
        link:'https://www.google.co.za',
        finishedLink: '<a href="https://www.google.co.za">Google</a>'
    },
    methods: {
        sayHello: function(){
            this.title = 'Hello';
            return this.title; // vue proxies the objects inside an template. Hence we can call this within this object
        }
    }
});