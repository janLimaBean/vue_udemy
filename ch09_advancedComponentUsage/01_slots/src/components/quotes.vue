<template>
    <div>
        <!-- 2. Setting up slot el -->
        <slot></slot>
    </div>
</template>

<script>
    
</script>
// 3. Note scope of compilations takes place and not where the data comes from i.e a slot from the parent. See h2
<style scoped>
    div{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto 30%;
        text-align:center;
    }
    h2 {
        color:red;
    }
</style>