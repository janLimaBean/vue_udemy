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
                <h6>Specify what node to get on fetchdata</h6>
                <input class="form-control" type="text" v-model="node">
                <hr>
                <button @click="submit" class="btn btn-primary">Submit</button>
                <button @click="submitAlt" class="btn btn-primary">Submit Alternate</button>
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
                resource: {},
                node: 'alternative'
            }
        },
        methods:{
            submit(){
            this.resource.save({}, this.user)
            },
            submitAlt(){
            this.resource.saveAlt(this.user)
            },
            fetchData(){
                // this.$http.get('data.json')
                // .then(response => {
                //     const jsonHelper = response.json();
                //     console.log(jsonHelper);
                //     return jsonHelper;
                // })
                // .then(data => {
                //     console.log(data); 
                //     this.users.push();
                //     const resultArray = [];
                //     for(let key in data){
                //         resultArray.push(data[key]);
                //         this.users = resultArray;
                //     }
                // });

                //2. Using our input to get the correct node
                this.resource.getData({node: this.node})
                    .then(response => {
                        console.log(response.json())
                    return response.json();
                })
                .then(data => {
                    // this.users.push();
                    const resultArray = [];
                    for(let key in data){
                        resultArray.push(data[key]);
                        
                    }
                    this.users = resultArray;
                });
            },
        },
        created() {
            const customActions = {
                save: {
                    method: 'POST', url: 'data.json'
                },
                saveAlt: {
                    method: 'POST', url: 'alternative.json'
                },
                getData: {
                    method: 'GET'
                }
            }
            // 1. Changing the data with a var(node) so we can either call data or alternative in the fetchData
                //  - see vueResource docs for url template building (https://medialize.github.io/URI.js/uri-template.html)
            this.resource = this.$resource('{node}.json', {}, customActions)
        }
    }
</script>

<style>
</style>
