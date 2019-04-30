<template>
    <container>
        <h3 class="h3-title">
            成功订单
        </h3>
        <div class="m28">
            <div class="amount-list">
                <div class="amount-li fl" style="background-image: linear-gradient(-135deg, #88EDD9 0%, #50D7B2 100%);">
                    <div class="amount-li-title">
                        订单金额
                    </div>
                    <div class="amount-li-number">
                        23090.88
                    </div>
                </div>
                <div class="amount-li fl" style="background-image: linear-gradient(-135deg, #88EDD9 0%, #50D7B2 100%);">
                    <div class="amount-li-title">
                        订单笔数
                    </div>
                    <div class="amount-li-number">
                        4
                    </div>
                </div>
                <div class="amount-li fl" style="background-image: linear-gradient(-142deg, #FD87CF 0%, #FB4FA1 100%);">
                    <div class="amount-li-title">
                        手续费
                    </div>
                    <div class="amount-li-number">
                        1090.88
                    </div>
                </div>
                <div class="amount-li fl" style="background-image: linear-gradient(-136deg, #A58EF9 0%, #6C55F1 100%);">
                    <div class="amount-li-title">
                        补单金额
                    </div>
                    <div class="amount-li-number">
                        198.68
                    </div>
                </div>
                <div class="amount-li fl" style="background-image: linear-gradient(-136deg, #A58EF9 0%, #6C55F1 100%);">
                    <div class="amount-li-title">
                        补单笔数
                    </div>
                    <div class="amount-li-number">
                        4
                    </div>
                </div>
            </div>
        </div>
        <div class="m28">
            <search>
                <a-form slot="search" layout="inline">
                    <a-form-item label="开始时间">
                        <a-input placeholder="开始时间"></a-input>
                    </a-form-item>
                    <a-form-item label="结束时间">
                        <a-input placeholder="结束时间"></a-input>
                    </a-form-item>
                    <a-form-item label="系统单号">
                        <a-input placeholder="系统单号"></a-input>
                    </a-form-item>
                    <a-form-item label="备注信息">
                        <a-input placeholder="备注信息"></a-input>
                    </a-form-item>
                    <a-form-item label="收款账号">
                        <a-input placeholder="收款账号"></a-input>
                    </a-form-item>
                    <a-form-item class="fr">
                        <a-button type="primary">
                            搜索
                        </a-button>
                    </a-form-item>
                </a-form>
                <div slot="table">
                    <a-table :columns="columns" :dataSource="data" :pagination="pagination"
                             @change="aa">
                        <div slot="account" slot-scope="item">
                            <img src="../assets/img/icon_bdlist.png" alt="" class="icon-bd">
                            {{item.account}}
                        </div>
                        <div slot="remark" slot-scope="item">
                            {{item.systemOrder}}<br>{{item.remark}}
                        </div>
                        <div slot="status" slot-scope="item">
                            <span v-if="item.status===1" style="color: #FB4FA1;">订单超时</span>
                            <span v-if="item.status===2" style="color: #128CE6;">未支付</span>
                            <span v-if="item.status===3">已支付</span>
                        </div>
                        <div slot="api" slot-scope="item">
                            <span v-if="item.api===1">请求成功</span>
                            <span v-if="item.api===0" style="color: #FB4FA1;">未请求</span>
                        </div>
                        <div slot="http" slot-scope="item">
                            {{item.http===1?'success':'ok'}}
                        </div>
                        <div slot="action" slot-scope="item">
                            <img v-if="item.request===1" src="../assets/img/icon_web_hover@1x.png" alt="" class="icon-bd pointer">
                            <a-dropdown v-if="item.request===0">
                                <img  src="../assets/img/icon_web_default@1x.png" alt="" class="icon-bd pointer">
                                <a-menu slot="overlay" class="sk-ant-dropdown">
                                    <a-menu-item class="sk-ant-dropdown-menu-item" @click="setRequest(item)">手动请求</a-menu-item>
                                </a-menu>
                            </a-dropdown>

                        </div>
                    </a-table>
                </div>
            </search>
        </div>
    </container>
</template>

<script>
    export default {
        name: "order",
        data() {
            return {
                title: '',
                visible: false,
                pagination: {
                    total: 100//默认每页10条
                },
                data: [{
                    key: '1',
                    id: 1,
                    systemOrder:"123123123123",
                    remark:"123123324234",
                    businessOrder:"wrwer32twer2323",
                    createTime: "2019-10-10 12:12:13",
                    payTime: "2019-10-10 12:12:13",
                    amount:"2.99",
                    type:"支付宝",
                    account:"12323234234234",
                    api:0,
                    http:0,
                    callbackTime:"2019-10-10 11:22:11",
                    commission:2.11,
                    repair:0,
                    request:0,
                }, {
                    key: '2',
                    id: 2,
                    systemOrder:"123123123123",
                    remark:"123123324234",
                    businessOrder:"wrwer32twer2323",
                    createTime: "2019-10-10 12:12:13",
                    payTime: "2019-10-10 12:12:13",
                    amount:"2.99",
                    type:"支付宝",
                    account:"12323234234234",
                    api:1,
                    http:1,
                    callbackTime:"2019-10-10 11:22:11",
                    commission:2.11,
                    repair:1,
                    request:1
                }],
                columns: [{
                    title: '收款账号',
                    scopedSlots: {customRender: 'account'},
                },{
                    title: '系统单号\n备注信息',
                    scopedSlots: {customRender: 'remark'},
                }, {
                    title: '金额',
                    dataIndex: 'amount',
                    align:"right"
                }, {
                    title: '类型',
                    dataIndex: 'type',
                },  {
                    title: '支付时间',
                    dataIndex: 'payTime'
                }, {
                    title: 'API',
                    scopedSlots: {customRender: 'api'}
                }, {
                    title: 'HTTP',
                    scopedSlots: {customRender: 'http'}
                }, {
                    title: '回调时间',
                    dataIndex: 'callbackTime',
                }, {
                    title: '手续费',
                    dataIndex: 'commission'
                },{
                    title: '操作',
                    key: 'action',
                    scopedSlots: {customRender: 'action'},
                }
                ],
                selectedRows: []
            }
        },
        methods: {
            setRequest:function(item){
                this.$confirm({
                    title: '你确认要手动回掉该订单吗?手动回掉立即生效无延迟!',
                    okText: '确定',
                    cancelText: '取消',
                    iconType: "warning",
                    onOk() {
                        console.log('OK');
                    },
                    onCancel() {
                        console.log('Cancel');
                    },
                });
            },
            handleOk: function () {

            },
            aa: function (p) {
                alert(JSON.stringify(p));
            },
            edit: function (item) {
                if (item) {
                    this.title = "修改客服";
                } else {
                    this.title = "添加客服";
                }
                this.visible = !this.visible;
            },
        },
        components: {
        }
    }
</script>
<style scoped src="./account.css"></style>
<style scoped>
    .icon-bd{
        width: 22px;
        height: 22px;
    }
    .amount-li-number{
        font-family: DIN-Bold;
        font-size: 24px;
        color: #FFFFFF;
    }
    .amount-li-title{
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 18px;
        margin-bottom: 8px;
    }
    .amount-li{
        width: 200px;
        height: 95px;
        border-radius: 4px;
        padding: 20px 0 0 51px;
        margin-right: 43px;
    }
    .amount-list .amount-li:last-child{
        margin-right: 0;
    }
    .amount-list{
        overflow: hidden;
    }
    .icon-bd{
        width: 24px;
        height: 24px;
    }
    .act {
        width: 18px;
        height: 18px;
        vertical-align: middle;
    }
</style>