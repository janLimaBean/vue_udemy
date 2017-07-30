<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>Reversed Name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset name without emit</button>
    </div>
</template>

<script>
    // 5. Importing the same eventBus
    import { eventBus } from '../main'
    export default {
        props: {
            name: {
                type:String,
                default: 'Max'
            },
            userAge:{
                type:Number
            },
            resetFn: Function
        },
        methods:{
            switchName(){
                return this.name.split("").reverse().join("");
            },
            resetName(){
                this.name = 'Max';
                this.$emit('nameWasReset',this.name)
            }
        },
        // 4. Using the created lifecycle hook to register a listen event after the comp has been created
        created(){
            // 6. Using the eventBus to update the data via the event listener. Note the dollar on the on since its vue func
                // Note es6 arrow function that is shorthand for a callback with an argument
                // No need to use $event on the argument since on will pass the data automatically and you can name it what you want
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
