<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-Quote>
                <!-- 1. Using named slot attributes -->
                <h2 slot="title">{{ quote }}</h2>
                <p slot="content">A wonderfull quote</p>
                <em>Some default slot content</em>
               </app-Quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/quotes.vue';
    export default {
        data:function(){
           return{ quote:'The Quote' }
        },
        components: {
            appQuote : Quote
        }
    }
</script>

<style>
</style>
