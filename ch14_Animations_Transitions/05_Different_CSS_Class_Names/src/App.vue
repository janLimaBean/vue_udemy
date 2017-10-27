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
    
                <transition name="slide" type="animation">
                    <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
                <!-- 2. Overwriting default classes vuejs are using. We can tell vuejs which
                        classes to use in which point in time 
                            a. enter-class=""
                            b. enter-active-class=""
                            c. leave-class=""
                            d. leave-active-class=""
                        Note to remove empty classes since that will give an error -->
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
// 1. Aim is to maybe have a animate CDN like Animate.css. Thus we need to tell vue not to use default enter leave classes but something else for the CDN to work. Note we added the animate.css CDN on index.html
    export default {
        data() {
            return {
                show: true
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
