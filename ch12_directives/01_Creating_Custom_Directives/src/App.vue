<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Build in Directives</h1>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <!-- 1. Setting up a directive is calling 'v-' + name of directive. See main.js for next -->
                <!-- 5. Using argument to style text -->
                <p v-highlight="'green'">Some text</p>

                <hr>
                
                <h4>v2 directive - arguments</h4>
                <!-- 6. Directive with more arguemnts note colon then argument see main.js -->
                <p v-highlightv2:background="'red'">Some text</p>
                <p v-highlightv2="'blue'">Some text</p>

                <hr>

                <h4>v3 directive - modifiers</h4>
                <!-- 8. Directive modifiers to an argument. Note .modifier on argument see main.js -->
                <p v-highlightv3:background.delayed="'blue'">Some text</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
