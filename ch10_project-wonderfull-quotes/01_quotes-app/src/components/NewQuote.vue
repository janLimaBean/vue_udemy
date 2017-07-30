<template>
    <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <form action="">
                <label for="">Quote</label>
                <!-- 8. Two way bind setup to the data prop for quote below -->
                <textarea class="form-control" name="" id="" cols="30" rows="3" v-model="quote"></textarea>
                <!-- 9. Calling function to emit an event on submit -->
                <button class="btn btn-primary" @click.prevent="createNew">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                quote:''
            }
        },
        methods:{
            createNew(){
                this.$emit('quoteAdded', this.quote);
                this.quote ='';
            }
        },
    }
</script>

<style scoped>
    button{
        margin-top:3px;
    }
</style>