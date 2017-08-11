<template>
    <div>
        <h1>Filters & Mixins</h1>
        <hr>
        <p>{{ title }}</p>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>


<script>
import {fruitMixin} from './fruitMixin';
    export default {
        // 3. Local Mixin registered
        mixins: [fruitMixin],
        data:function(){
            return {
                title:'Hello Again'
            }
        },
        created(){
            console.log('List created hook')
        }
    }
</script>

<style>
</style>
