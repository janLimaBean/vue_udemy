<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>
            </div>
        </div>
    </div>
</template>

<script>
// 1. Typically we are currently manipulating our store values from the components which is not ideal since it will make 
    // a. Troubleshooting hard
    // b. Could cause error code if we have lots of components making changes at the same time
// 2. Solutions is Setters - in vue its called Mutations since it changes the state and then all the getters that listens to 
    // the mutation will get the updated value
// 3. See store.js for start
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
            appAnotherResult: AnotherResult,
        }
    }
</script>

