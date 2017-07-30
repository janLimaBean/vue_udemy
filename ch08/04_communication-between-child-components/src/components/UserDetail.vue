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
            },
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
