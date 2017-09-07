<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        // 10. Display store object
        computed: {
            counter() {
                return this.$store.state.counter
            }
        }
    }
</script>