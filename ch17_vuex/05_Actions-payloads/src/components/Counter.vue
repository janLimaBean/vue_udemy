<template>
    <div>
        <!-- 4. Setting up argument for action payload -->
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.state.counter++
            },
            decrement() {
                this.$store.state.counter--
            }
        }
    }
</script>