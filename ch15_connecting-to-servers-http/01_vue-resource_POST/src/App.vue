<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>

                <div class="form-group">
                    <label for="">Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>

                <button @click="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    // 1. See main.js how to start the setup
    export default {
        // 5. Setup data attributes to be used in form
        data(){
            return {
                user: {
                    username:'',
                    email:''
                }
            }
        },
        // 6. Creating submit method to firebase
        methods:{
            submit(){
                // 7. By implementing vue-resource we have access to the $http method
                // 8. Post takes 2 arguments (link, data)
                    // a. link argument will need to specify a node name(can be anything you added in firebase)
                    // b. .json is required for it accepts json
               this.$http.post('https://vue-http-82b64.firebaseio.com/data.json', this.user)
                // 9. Using promises in vue where then is the function that runs on response from server
                    // using es6 func
               .then(response => {
                    console.log(response);
                // 10. Can run code on any errors as belwo
               }, error => {
                    console.log(error);
               });
            }
        }
    }
</script>

<style>
</style>
