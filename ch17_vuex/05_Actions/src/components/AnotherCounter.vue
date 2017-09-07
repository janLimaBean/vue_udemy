<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
// 7.Changing helper method to actions
    import { mapActions } from 'vuex';
    export default {
        // Without using the helper we would use the following in the methods object:
            // this.$store.dispatch('increment')
                //   * note above we dispatch actions
        
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>