<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
            <!-- 2. setting up buttons to cycle - ie. could be tabs in an application -->
            <button @click="selectedComponent= 'appQuote'">Quote</button>
            <button @click="selectedComponent= 'appAuthor'">Author</button>
            <button @click="selectedComponent= 'appNew'">New</button>
            <hr>
            <p>Selected Component: {{ selectedComponent }}</p>

            <!-- 5. To override point 4's default behavior to destroy a component wrap your dynamic component in the reserved keep-alive tagname --> 
            <keep-alive>
                <!-- 3. Using the component reserved keyword with the :is directive bind to the data prop selectedComponent. This will dynamically assign the correct component -->
                <component :is="selectedComponent">
                    <h2 slot="title">{{ quote }}</h2>
                    <p slot="content">A wonderfull quote</p>
                    <em>Some default slot content</em>
                </component>
            </keep-alive>
            
            </div>
        </div>
    </div>
</template>

<script>
    import Author from './components/Author.vue';
    import Quote from './components/Quotes.vue';
    import New from './components/New.vue';
    export default {
        data:function(){
            return { 
                quote:'The Quote',
                // 1.Setting up var that holds the current selected component
                selectedComponent:'appQuote'
            }
        },
        components: {
            appAuthor : Author,
            appQuote : Quote,
            appNew : New
        }
    }
</script>

<style>
    div.wrapper{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto 30%;
        text-align:center;
    }
</style>
