<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <h6>Another Result</h6>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>
                <hr>
                <!-- 5. Setting up two way bind input -->
                <input type="text" v-model="value">
                {{value}}
            </div>
        </div>
    </div>
</template>

<script>
// 1. Sometimes you want to update the state with two way binding. Problem is that with i.e comp props
    // is that comp props by definition only returns a property from the state and does not set that.
    // There is a way to fix this by setting setters and getters in the comp props. See store.js

    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        // 6. Setting up new computed prop
        computed: {
            // 7: Now we use a computed prop object by which we get and set the values
            value: {
                get() {
                    return this.$store.getters.value
                },
                // 8. value will be the passing value from the v-model
                set(value) {
                    this.$store.dispatch('updateValue', value)
                }
            }
        },
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
            appAnotherResult: AnotherResult,
        }
    }
</script>

