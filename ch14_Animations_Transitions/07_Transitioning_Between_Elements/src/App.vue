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
                
                <transition 
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                >
                    <div v-if="show" class="alert alert-info">This is some Info</div>
                </transition>

                <!-- 4. 
                    Setting mode attribute to specify how animations should transition 
                    There are two modes to choose from.
                        a. out-in
                        b. in-out
                    This only specifies i.e let the old element animate out first then animate in second element
                -->
                <transition :name="alertAnimation" mode="out-in">
                <!-- 2. Setting up another element to animate -->
                    <div v-if="show" class="alert alert-info" key="info">This is some Info</div>
                <!-- 3. 
                    Negating the show if so that only one element is shown at a time. Important to bind this to v-if and v-else. v-show will not work 

                    Now we are adding the key attribute so that we can differentiate between the two elements  
                -->
                    <div v-else="!show" class="alert alert-warning" key="warning">This is some Warning</div>
                </transition>
                
                
            </div>
        </div>
    </div>
</template>

<script>
// 1. Aim is to switch between elements as one element is removed you start animating another one.
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
        transition: opacity 1s;
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
