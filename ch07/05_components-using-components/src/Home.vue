 <template>
    <div>
        <app-server-status v-for="server in 5"></app-server-status>
    </div>
 </template>
<script>
// 5. Importing (this is similar to include php) ServerStatus vue file - var name after import not important

    import ServerStatus from './ServerStatus.vue';
    export default {
// 6. Registering component locally
       components: {
           'app-server-status' : ServerStatus
       }
    }
</script>