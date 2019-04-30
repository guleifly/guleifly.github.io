<template>
    <container>
        <h3 class="h3-title">余额充值</h3>
        <systemContent>
            <div class="wrap-account">
                <a-form>
                    <a-form-item>
                        <label for="3" class="label">手机号</label>
                        <a-input id="3" placeholder="请输入手机号"/>
                    </a-form-item>
                    <a-form-item>
                        <label class="label">支付方式</label>
                        <a-form-item style="margin-bottom:0">
                            <a-radio-group v-model="pay" >
                                <a-radio value="ali">
                                    支付宝
                                </a-radio>
                            </a-radio-group>
                        </a-form-item>
                    </a-form-item>
                    <a-form-item>
                        <label class="label">金额  <span class="tips">注意：请一定按照二维码的金额转账，否则无法到账</span></label>
                        <div>
                            <a-button style="margin-right: 18px" @click="setAmount(item)" v-for="item in list">¥ {{item.name}}</a-button>
                        </div>
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" id="submit">确认充值</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </systemContent>
    </container>
</template>

<script>
    export default {
        name: "balance",
        data(){
            return{
                pay:"ali",
                list:[
                    {
                        value:"100",
                        name:100
                    },
                    {
                        value:"200",
                        name:200
                    },{
                        value:"200",
                        name:200
                    },
                    {
                        value:"300",
                        name:300
                    }

                ]
            }
        },
        methods:{
            setAmount:function (item) {
                alert(item.value);
            }
        }
    }
</script>
<style scoped>
    .tips{
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FB4FA1;
        line-height: 14px;
        margin-left: 16px;
        display: inline-block;
    }
</style>

<style src="./account.css"></style>