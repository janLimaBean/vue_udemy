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
        // 4. Setting up outside passing properties with props
        props: [
        // 5. Note the name we specify must be the same as with what we used in the template
            'name'
        ],
        methods:{
            switchName(){
                // note we can still refer to this because the prop is a data attribute in this vue instance
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
