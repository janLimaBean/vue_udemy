<template>
    <div class="component">
<!--
    The idea is to be able to communicate between child components.
    The implication with this is that vue communication is only unidirectional from parent to child. Thus to solve above we need to:
        a. Setup age props on both child components that bind to parent component
        b. Setup a function on the child to i.e change the age and also setup an emit event to parent
        c. Setup listeners on the parent to listen for the age that changed and update the parent prop
        d. Thus all the data in the child components will be updated
-->

        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is: {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
            <!-- 6. Adding the age to user detail as well -->
            <app-user-detail 
                :name="name" 
                @nameWasReset="name = $event"
                :resetFn="resetNameWithoutEmit"
                :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
            <!-- 2. Passing to child comp -->
            <!-- 8. Listen for age edit event -->
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
        // 1.Setting new data prop
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
