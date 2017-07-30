<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>Reversed Name: {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button>
        <!-- 9. Now we can use the function in the child that actually updates the data in the parent-->
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
            resetFn: Function
        },
        methods:{
            switchName(){
                return this.name.split("").reverse().join("");
            },
            resetName(){
                // 1. We are chinging the name only in the child component to Max. The parent will still have a ref
                    // that the name is Anna hence will not update the child
                // 2. To fix this we will need to inform the parent that the name has change by using vue func emit
                this.name = 'Max';
                // 3. This takes the name of the event as first arg and the data as the second
                // 4. Now in the parent we can listen for the event
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
