<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- <p> {{ text }}</p> -->
                
                <!-- 2. Applying the filter with the pipe command -->
                <p> {{ text | toUppercase }}</p> 
                <!-- 4. You can also chain your filters atop one another -->
                <p> {{ text | toUppercase  | to-lowercase }}</p> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                text:'hello there',
                text2:'hello world'
            }
        },
        // 1. registering a filter locally
        filters:{
            toUppercase(value){
                return value.toUpperCase();
            }
        }
    }
</script>

<style>

</style>
