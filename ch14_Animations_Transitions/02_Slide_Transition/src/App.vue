<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button @click="show = !show" class="btn btn-primary">Show alert</button>
                <br><br>
                
                <transition name="fade">
                    <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
                                
                <transition name="slide">
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
    /* Fade Transition */
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {
        /* opacity: 1; */
    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    /* Slide Transition */
    /* 1. Setting up classes*/
    .slide-enter {
        /* b. no need to setup below because of keyframes */
        /* transform: translateY(20px); */
    }
    .slide-enter-active {
        /*3. Setup the animation. slide-in refers to the keyframe and forwards keeps the frame in the finished state and does not snap back to starting position */
        animation: slide-in 1s ease-out forwards;
    }
    .slide-leave {
        /* c. No need to setup since the default is 0 */
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
    }
    /* 2. Setting up keyframes */
    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
