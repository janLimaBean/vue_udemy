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
                users:[],
                resource: {}
            }
        },
        methods:{
            submit(){
        /*
            // 2. Have to add back the data.json since we removed it from the root url
               this.$http.post('data.json', this.user)
               .then(response => {
                    // console.log(response);
               }, error => {
                    console.log(error);
               });
        */
        
            // 4. Creating a new resource
                // save is one of the default functions
                // first argument is options. second is the data
            this.resource.save({}, this.user)
            // 7. Calling our other resource - see firebase there will be another json object stored
            this.resource.saveAlt(this.user)
            },
            fetchData(){
                this.$http.get('data.json')
                .then(response => {
                    const jsonHelper = response.json();
                    console.log(jsonHelper);
                    return jsonHelper;
                })
                .then(data => {
                    console.log(data);
                    this.users.push();
                    const resultArray = [];
                    for(let key in data){
                        resultArray.push(data[key]);
                        this.users = resultArray;
                    }
                });
            }
        },
        created() {
            // 5. Creating a custom resource
            const customActions = {
                saveAlt: {
                    method: 'POST', url: 'alternative.json'
                }
            }
            // 3. Creating the resource - takes as the first arg the resource 
            // this.resource = this.$resource('data.json')
            
            // 6. Adding our custom resources - second argument is to pass variable data into url. Third option is to pass the 
                    // new resource (our customActions) 
            this.resource = this.$resource('data.json', {}, customActions)
        }
    }
</script>

<style>
</style>
