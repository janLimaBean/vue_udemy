<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
            </div>
        </div>
    </div>
</template>

<script>
// 1. Note we created AnotherResult file that duplicates the code. This poses a problem because of the duplication and to
    // resolve issues like errors would be a difficult task to manage
// 2. The solutions - Getters - see AnotherResult on the solution

    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
        }
    }
</script>

