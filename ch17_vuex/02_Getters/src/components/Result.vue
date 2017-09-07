<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter() {
                // getting prop itself not the getter
                return this.$store.state.counter
            }
        }
    }
</script>