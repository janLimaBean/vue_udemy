<template>
    <div class="component">
<!--
    Previous lesson has shown that we need to follow a rule by passing data from children to parent and parent to children.
    There is another option to communicate between children only via the eventBus

    We will start off in the main.js to show how it is done.
-->

        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is: {{ name }}</p>
        <!-- 7. Note that the age is not changed because communication is only between 2 comp -->
        <p>Age is {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
            <app-user-detail 
                :name="name" 
                @nameWasReset="name = $event"
                :resetFn="resetNameWithoutEmit"
                :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :userAge="age"
                    @ageWasEdited="age=$event"></app-user-edit>
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
                name:'Max',
                age:27
            }
        },
        methods:{
            changeName() {
                this.name = 'Anna'
            },
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
