<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <!-- 6. You can remove the nameWasReset to see the effect of not having the update -->
        <p>Name is: {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
            <!-- 5. Using v-on @ to listen for the event and change the name to the data passed by the event -->
            <!-- 8. Note how we pass the function from parent to child Note we also use bind-->
            <app-user-detail 
                :name="name" 
                @nameWasReset="name = $event"
                :resetFn="resetNameWithoutEmit"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return {
                name:'Max'
            }
        },
        methods:{
            changeName() {
                this.name = 'Anna'
            },
            // 7. Instead of using emits to update data you can also pass func to childcomp that will update data in the parent
            resetNameWithoutEmit(){
                this.name = "Max"
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
