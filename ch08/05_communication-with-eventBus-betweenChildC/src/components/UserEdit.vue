<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    // 2. importing named export note braces
    import { eventBus } from '../main'
    export default {
        props:['userAge'],
        methods:{
            editAge(){
                this.userAge = 30;
    // 3. disabling old emit method
                // this.$emit('ageWasEdited', this.userAge)
    // 3.1. Now we can use the same emit function but this is contained in our evenBus vue instance
                // eventBus.$emit('ageWasEdited', this.userAge);

    // 8.1 Note how we can use helper function here
                eventBus.changeAge(this.userAge)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
