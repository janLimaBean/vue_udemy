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
// 1. We cannot run async tasks on mutators by default, thus you cant track which mutation was responsible for which change.
        // Basically your state gets changed from different sources and you cant tell in which order this happened
// 2. The solution is ACTIONS. Actions can execute async functions for us and upon success will then only commit the change via 
        // the mutator
// 3. See store for start
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

