<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <!-- 5. Using function -->
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    export default {
        // 3. Setting up expecting prop
        props:['userAge'],
        methods:{
        // 4. Defining method to change the age
            editAge(){
                this.userAge = 30;
                // 7. Option 1 to update data is to use emit an event and have user listen for that
                    // Option 2 to could go the fn function as seen before
                this.$emit('ageWasEdited', this.userAge)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
