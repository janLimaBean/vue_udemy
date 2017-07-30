<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <!-- 2. Setup two way bind to enter filter text -->
                <input v-model="filterText">
                <ul>
                   <!-- <li v-for="fruit in filteredFruits">{{ fruit }}</li> -->

                   <!-- 5. Replacing the loop with our custom filter -->
                   <!-- Using a computed property vs a filter because of performance issues when adding a filter to an array. Remember computed only runs on changes -->
                        <!-- Vue will always run the filter no matter the input - normal behav but is resource intensive sometimes -->
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Hello there!',
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                // 1. Setting up filter prop to hold the input text
                filterText: ''
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        computed: {
            // 3. Setting up what property to watch
            filteredFruits() {
                // 4. return whatever matches our filterText on fruits array

                // calling js filter method with es6 callback to return the matching el on match
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                });
            }
        }
    }
</script>

<style>
</style>
