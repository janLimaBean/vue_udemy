<template>
    <div class="container">
<!-- 2. Note how we just call the component where imported below -->
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
// 1. Note how we rather import shared and base style components into our root app.vue
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
    // 3. We do not need to specify key and var but only var and vue will do the rest.
    // 4. We can also call user camelcase vars and in tagnames use dashes to represent the var
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
