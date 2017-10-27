<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button @click="show = !show" class="btn btn-primary">Show alert</button>
                <br><br>

                <!-- 1. Vue offers a special transition component that can be used to animate anything 
                        inbetween the opening and closing tags
                        a. Important you can only animate one el between the tags
                        b. Default class names are added to the transition tags but you can prefix
                            them with named attributes.
                 -->
                <transition name="fade">
                    <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style>
    /* 2. Prefix default classes with our named class */
    .fade-enter {
        /* a. Do not setup frame transitions here. */
        opacity: 0;
    }
    .fade-enter-active {
        /* b. Setup frame transitions here. */
        transition: opacity 1s;
    }
    .fade-leave {
        /* c. default is 1 so no need to specify the opacity level */
        /* opacity: 1; */
    }
    .fade-leave-active {
        transition: opacity 1s;
        /* d. Have to setup the opacity since the default is 1 */
        opacity: 0;
    }
</style>
