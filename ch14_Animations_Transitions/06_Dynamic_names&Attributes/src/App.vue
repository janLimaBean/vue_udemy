<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select class="form-control" v-model="alertAnimation">
                    <option value='slide'>Slide</option>
                    <option value='fade'>Fade</option>
                </select>
                <br><br>

                <button @click="show = !show" class="btn btn-primary">Show alert</button>
                <br><br>
                
                <transition :name="alertAnimation">
                    <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
    
                <transition :name="alertAnimation" type="animation">
                    <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
                <!-- 
                    2. Overwriting default vue classes with our own classes. Note we have can specify each frame individually and by calling the frames we can overwride the default append classes
                        a. enter-class=""
                        b. enter-active-class=""
                        c. leave-class=""
                        d. leave-active-class="" 
                    Note you need to remove empty classes below otherwise youll get an error
                -->
                <transition 
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                >
                    <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
                
            </div>
        </div>
    </div>
</template>

<script>
// 1. Aim is to bind the name classes like fade to a selection box with v-model
    export default {
        data() {
            return {
                show: true,
                alertAnimation: 'fade'
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
    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    /* Slide Transition */
    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave {
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
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
