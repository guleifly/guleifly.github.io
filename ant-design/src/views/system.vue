<template>
    <container>
        <h3 class="h3-title">系统消息</h3>
        <systemContent>
            <div class="ant-list-item"  v-for="item in list">
                <div class="list ant-list-item-content ant-list-item-content-single">
                    <router-link to="message" class="left-li">
                        <div class="left-li">
                        <span style="position: relative">
                            {{item.content}}
                            <i class="point"></i>
                        </span>
                        </div>
                    </router-link>

                    <div class="right-li">2019-10-10 11:11:11</div>
                </div>
            </div>
        </systemContent>
    </container>
</template>

<script>
    export default {
        name: "system",
        data() {
            return {
                list: [
                    {
                        content: "12312321"
                    },
                    {
                        content: "12312sdfsdfsdf321"
                    }
                ]
            }
        }
    }
</script>

<style src="./account.css"></style>
<style>
    .ant-list-item .list a span{
        color: #666666!important;
    }
</style>
<style scoped>
    .point{
        position: absolute;
        right:-4px;
        top:-5px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: red;
    }
    .ant-list-item{
        padding: 25px 0;
        border-bottom: 1px solid #F3F3F3;;
    }
    .list {
        padding:0 35px;
        display: flex;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        line-height: 14px;
    }
    .left-li{
        flex:1
    }
    .right-li{
        width: 150px;
    }
</style>