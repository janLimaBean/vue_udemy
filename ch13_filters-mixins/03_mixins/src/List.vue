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
    // 2. Remove all code under the export default and create a new file fruitMixin.js - 
        // note the import on the array is not of type string
    export default {
        // 3. Using mixins property to pull in the mixin shared code
        mixins: [fruitMixin],
        // 4. Also note that vue will merge the code from the mixin and the code below i.e in the data property
        // 5. Note that the order of the merge will be mixin first then comp with comp taking precedence
        data:function(){
            return {
                title:'Hello Again'
            }
        },
        created(){
            console.log('Comp Created')
        }
    }
</script>

<style>
</style>
