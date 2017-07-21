new Vue({
    el: '#app',
    data: {
        attachRed: false,
        color: 'gray',
        width: 100
    },
// Note we are using a computed property because the action is dependend on the value of the attachRed property.
    computed: {
        myStyle: function() {
            return {
                // Note how we use css properties as keys that will be interpreted in the html as inline style tags
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    }
});