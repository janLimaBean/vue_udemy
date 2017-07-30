<template>
    <div class="container">
        <!-- 12. importing new header comp -->
        <!-- 14. sending the styling params through to the header to style the width -->
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <!-- 7. Adding the newQuote comp to listen for new quotes that are passed via emit from the comp -->
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <!-- 3. Binding the data to the child comp -->
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-Quote-Grid>
    </div>
</template>

<script>
    // 1. Importing the parent comp
    import QuoteGrid from './components/QuoteGrid.vue'
    import NewQuote from './components/NewQuote.vue'
    import Header from './components/Header.vue'
    export default {
        data: function(){
            return {
    // 2. Setting the data for the grid
                quotes:['Placeholder quote'],
                maxQuotes:10,
            }
        },
        methods:{
            // Remember the event listen will automatically pass data from event to function hence no need on top to specify arg for method newQuote
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes){
                    alert('Please delete quotes first');
                } else {
                    this.quotes.push(quote);
                }
                
            },
            deleteQuote(index){
                this.quotes.splice(index,1);
            }
        },
        components:{
            appQuoteGrid : QuoteGrid,
            appNewQuote : NewQuote,
            appHeader: Header
        }
    }
</script>
