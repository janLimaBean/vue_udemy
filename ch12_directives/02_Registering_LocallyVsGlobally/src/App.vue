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
                <p v-highlight="'green'">Some text</p>

                <hr>
                
                <h4>v2 directive - arguments</h4>
                <p v-highlightv2:background="'red'">Some text</p>
                <p v-highlightv2="'blue'">Some text</p>

                <hr>

                <h4>v3 directive - modifiers</h4>
                <p v-highlightv3:background.delayed="'blue'">Some text</p>
                
                <hr>

                <h4>v4 Local Directive - modifiers</h4>
                <!-- 2. Calling local highlight -->
                <p v-local-highlight:background.delayed="'blue'">Some text</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // 1. Registering a directive locally with the directives prop
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    let delay = 0

                    if (binding.modifiers['delayed']) {
                        delay = 2000
                    }
                    setTimeout(() => {
                        if (binding.arg == 'background') {
                            el.style.backgroundColor = binding.value
                        } else {
                            el.style.color = binding.value
                        }
                    }, delay)
                }
            }
        }
    }
</script>

<style>

</style>
