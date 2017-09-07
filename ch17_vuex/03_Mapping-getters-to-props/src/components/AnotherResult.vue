<template>
    <div>
    <!--
        <p>Counter is: {{ counter }}</p>
        <p>Number of Clicks: {{ clicks }}</p>
    -->
         <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
    
</template>

<script>
    // 4. Solutions to this is a helper function from vuex
    import { mapGetters } from 'vuex'

    export default {
    /*      computed: {
            // 3. Proplem is that we have two computed prop to get the state - would be nice to refactor the code so that we can
                // only call a getter name and vue would resolve this.
            counter() {
                return this.$store.getters.doubleCounter
            }, 
            clicks() {
                return this.$store.getters.stringCounter
            }
        } 
    */

        
        // 5. Now we can use this helper function - specify in the array as strings all the getters we want to use
        //  - you can also pass object vs the array i.e mapgetters({propertyName:'doubleCounter'})
        // 6. The limit now is that we cant use our own computed properties with logic associated
    /*  computed: mapGetters([
            'doubleCounter',
            'stringCounter'
        ])
    */

        // 7. Solution using es6 spread operator which states - pull out all the properties and methods in the object
            // (remember mapgetters creates an object with store getters) and create seperate keyValue pairs for them.
        computed: {
            // To make vue recognise ... Remember to:
                // 1. Install for dev env:  babel-preset-stage-2 --save-dev
                // 2. Adding another preset to babelrc file: ['stage-2']
            ...mapGetters([ 
                'doubleCounter',
                'stringCounter'
            ]),
            ourOwnComputed(){
                // code here for custom computed property
            }
        }

    }
</script>