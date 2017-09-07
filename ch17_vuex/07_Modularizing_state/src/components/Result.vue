<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.state.counter
            }
        },
        created() {
            console.log(this.$store)
        }
    }
</script>