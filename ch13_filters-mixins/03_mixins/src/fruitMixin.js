export const fruitMixin = {
            data() {
            return {
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: ''
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                });
            }
        },
        // 5. Note that the order of the merge will be mixin first then comp with comp taking precedence
        created(){
            console.log('Mixin Creadted')
        }
}