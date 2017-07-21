new Vue({
    el: '#app',
    data: {
        attachRed: false,
        color: 'green'
    },
// Note we are using a computed property because the action is dependend on the value of the attachRed property.
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    }
});