new Vue({
    el: '#app',
    data: {
        counter: 0,
        x:0,
        y:0
    },
    methods: {
        increase: function(step, event){
            // this.counter++;
            console.log(event);
            this.counter += step;
        },
    // vue captures events automatically in functions
        updateCoordinates: function(event) {
            // event.client is DOM object properties
            this.x = event.clientX;
            this.y = event.clientY;
        },
        dummy: function(event) {
            // using dom stopPropagation method(preventing any parent handlers from being notified of the event) to 
            //  cancel out the update coordinates method
            event.stopPropagation();
        },
        alertMe: function() {
            alert('Watch');
        }
    }
});