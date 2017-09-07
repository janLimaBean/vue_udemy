<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
    /*    
        methods: {
            increment() {
                // 5. Using commit with mutation as an argument - note this is a string
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.commit('decrement')
            }
        }
    */

        // 6. Using same spread operator as getters - note need to import helper - note above we commit mutations
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
</script>