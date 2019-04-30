<template>
    <div class="full">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "container"
    }
</script>

<style scoped>
    .full{
        width: 100%;
        height: 100%;
        overflow: auto;
        padding: 20px 24px 30px 30px;
        box-sizing: border-box;
        background: #f5f7fb;
        display: flex;
        flex-direction: column;
    }
</style>