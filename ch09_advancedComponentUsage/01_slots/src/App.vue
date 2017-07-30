<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-Quote>
               <!-- 1. setting up slot content. Need to setup a slot el in the child component to receive this -->
                <h2>{{ quote }}</h2>
                <p>A wonderfull quote</p>
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
