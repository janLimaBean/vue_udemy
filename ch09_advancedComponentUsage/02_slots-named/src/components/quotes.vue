<template>
    <div>
        <!-- 2. using name attribute in conjunction with slot attribute -->
        <slot name="title"></slot>
        <!-- 4. You can also specify defaults if no slot data is passed to child -->
        <slot name="subTitle"><em>Subtitle slot holder</em></slot>
        <hr>
        <slot name="content"></slot>
        <!-- 3. slot that does not have a name will take the first non-named slot content by default -->
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