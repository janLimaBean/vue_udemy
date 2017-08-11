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
                <!-- 1. Setting up new button and ul to display data -->
                <button @click="fetchData" class="btn btn-primary">Get Data</button>
                
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user: {
                    username:'',
                    email:''
                },
                users:[]
            }
        },
        methods:{
            submit(){
               this.$http.post('https://vue-http-82b64.firebaseio.com/data.json', this.user)
               .then(response => {
                    console.log(response);
               }, error => {
                    console.log(error);
               });
            },
            // 2. Setting up function with not additional arg but only url string - note the node data still needs to be specified. Similar to tablename
            fetchData(){
                this.$http.get('https://vue-http-82b64.firebaseio.com/data.json')
                .then(response => {
                    // 3. Vue already ships with some usefull helper methods for handling responses as below parsing the body of a json
                    const jsonHelper = response.json();
                    // 4. Note that you will get a promise data object and not the expected response
                        // this is because the helper method also returns a promise
                    console.log(jsonHelper);

                    // 5. Thus all you need to do is return the first response and chain another then() on the json()
                    return jsonHelper;
                })
                // Note the data just means the response that is passed automatically
                .then(data => {
                    console.log(data);
                    const resultArray = [];
                    // 6. Using for js loop to add data to an arr and assigning it to the users arr
                    for(let key in data){
                        resultArray.push(data[key]);
                        this.users = resultArray;
                    }
                });
            }
        }
    }
</script>

<style>
</style>
