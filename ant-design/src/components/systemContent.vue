<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "systemContent"
    }
</script>

<style scoped>
    .content{
        background: #fff;
        margin-top: 28px;
        flex: 1;
        overflow: auto;
    }
</style>