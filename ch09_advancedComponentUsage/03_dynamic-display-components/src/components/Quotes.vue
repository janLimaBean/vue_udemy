<template>
    <div class="wrapper quotes">
        <slot name="title"></slot>
        <slot name="subTitle"><em>Subtitle slot holder</em></slot>
        <hr>
        <slot name="content"></slot>
        <slot></slot>
    </div>
</template>

<script>
    
</script>
<style scoped>
    .quotes{
         box-shadow: 0px 3px 34px black;   
    }
    h2 {
        color:red;
    }
</style>