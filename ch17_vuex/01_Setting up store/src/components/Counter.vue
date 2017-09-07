<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                console.log(this.$store)
                // 9. Accessing store - In the result.vue we will display the counter
                this.$store.state.counter++
            },
            decrement() {
                console.log(this.$store)
                this.$store.state.counter--
            }
        }
    }
</script>