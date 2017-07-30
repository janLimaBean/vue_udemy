<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
        <!-- 6. Using slots to pass the data from parent interpolation to child -->
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .panel-body{
        font-family: 'Arizonia', cursive;
        font-size:24px;
        color:#6e6e6e
    }
    .quote {
        curson:pointer
    }
    .quote:hover{
        background-color: #ffe2e2;
    }
</style>