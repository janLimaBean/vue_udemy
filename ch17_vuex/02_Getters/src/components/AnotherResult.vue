<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter() {
                // 3. So we want to outsource this calculation into a getter - see store.js
                // return this.$store.state.counter

                // 6. Calling the getter function - note no need to call the function ()
                return this.$store.getters.doubleCounter
            }
        }
    }
</script>