<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>Reversed Name: {{ switchName() }}</p>
    </div>
</template>

<script>
    export default {
        // 1. Setting up validation options. Note this is not an array anymore but on object
        props: {
            name: {
                type: String,
                default: 'Max'
            }
        },
        methods:{
            switchName(){
                return this.name.split("").reverse().join("");
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
