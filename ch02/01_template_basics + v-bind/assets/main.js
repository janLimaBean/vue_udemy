new Vue({
    el: '#app',
    data: {
        title:'Hello World!!',
        link:'https://www.google.co.za'
    },
    methods: {
        sayHello: function(){
            return this.title; // vue proxies the objects inside an template. Hence we can call this within this object
        }
    }
});