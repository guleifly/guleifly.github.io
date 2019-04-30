<template>
    <container>
        <h3 class="h3-title">修改资料</h3>
        <systemContent>
            <div class="wrap-account">
                <a-form>
                    <a-form-item>
                        <label for="3" class="label">手机号</label>
                        <a-input id="3" placeholder="请输入手机号"/>
                    </a-form-item>
                    <a-form-item>
                        <label for="4" class="label">新密码
                            <a-tooltip placement="right" title="6位数">
                                <span class="rule">密码规则说明</span>
                            </a-tooltip>
                        </label>
                        <a-input id="4" placeholder="请输入密码"/>
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" id="submit">保存</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </systemContent>
    </container>
</template>

<script>
    export default {
        name: "account"
    }
</script>


<style src="./account.css"></style>
<style scoped>
    .label{
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #1E1E1E;
        line-height: 16px;
    }
</style>