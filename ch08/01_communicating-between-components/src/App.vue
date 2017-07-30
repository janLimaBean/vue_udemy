<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
            <!-- 1. Parent component -->
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue';

    export default {
        components: {
            // note using js camelcase and then dash to call el
            appUser: User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
