<template>
    <div class="row">
        <!-- 5. No tag nesting or style on interpolation because we are using slots -->
        <!-- 10. using native modifier on click to emulate clicking on the child element -->
        <!-- 11. Setting up index on the quote entity and using that on the deleteQuote fn-->
        <app-quote v-for="(quote,index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
    </div>
</template>

<script>
// 4. Setting up imports for another nested child comp and props coming from parent
    import Quote from './Quote.vue'
    export default {
        props:['quotes'],
        components:{
            appQuote: Quote
        },
        methods:{
            deleteQuote(index){
                this.$emit('quoteDeleted',index);
            }
        }
    }
</script>