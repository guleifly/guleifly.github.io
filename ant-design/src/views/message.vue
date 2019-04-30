<template>
    <container>
        <h3 class="h3-title">系统消息 <div class="back"><a-icon type="rollback" />返回上级</div></h3>
        <systemContent>
            <div class="wrap-content">
                <h3 class="title">系统通知标题</h3>
                <h5 class="time">2019-10-10</h5>
                <p class="message-content">内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内容在这里内</p>
            </div>
        </systemContent>
    </container>
</template>

<script>
    export default {
        name: "message"
    }
</script>
<style scoped>
    .back{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #128CE6;
        display: inline-block;
        margin-left: 18px;
        font-weight: normal;
        cursor: pointer;
    }
    .wrap-content{
        padding: 12px 40px;
    }
    .title{
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #1E1E1E;
        line-height: 20px;
        text-align: center;
        padding: 36px 0;
    }
    .time{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        line-height: 14px;
        margin-bottom: 33px;
        text-align: center;
    }
    .message-content{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        line-height: 22px;
    }
</style>

<style src="./account.css"></style>