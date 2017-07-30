<template>
    <div class="wrapper new">
        <h3><label for="newQuote">New Quote</label></h3>
        <input type="text" name="newQuote" placeholder="Enter new Quote">
        <hr>
        <button @click="counter++">Increase!</button>
        <p>Counter is: {{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                counter:0
            };
        },
        // 4. It is very important to note that once you cycle between components the default behaviour is to destroy the component
            // You can also see that with the counter changing back to 0 by cycling comp
        destroyed(){
            console.log('New component was destroyed')
        },
        // 6. Once you use the keep alive then you can also use 2 important hooks for callbacks
            // a. deactivated - once you navigate away from the component
        deactivated(){
            console.log('deactivated')
        },
            // b. activated - once you navigate back to the component
        activated(){
            console.log('activated')
        }
    }
</script>

<style scoped>
    input{
        text-align:center;
    }
</style>