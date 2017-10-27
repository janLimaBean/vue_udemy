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

                <!-- 5. Setting up a type attribute so vue can know which time frame to use -->     
                <transition name="slide" type="animation">
                    <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
                
            </div>
        </div>
    </div>
</template>

<script>
// 1. Aim is to have the animation not just slide but also change opacity levels while it slides
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
    .slide-enter {
        /* 2. Mixing transitions and animations. Note we can also put these classes in the keyframs but the point is to mix them*/
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        /* 3. Setting opacity transition - again no need to set opacity to 1 since that is the default */
        transition: opacity .5s;
    }
    .slide-leave {
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        /* 4. A problem arises that if you specify 2 different types of time frames */
        /* This can be remedied by adding a attribute to the element of type */
        transition: opacity 3s;
        opacity: 0;
    }

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
