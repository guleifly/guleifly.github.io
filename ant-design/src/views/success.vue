<template>
    <container>
        <h3 class="h3-title">
            成功订单
        </h3>

        <div class="m28">
            <search>
                <a-form slot="search" layout="inline">
                    <a-form-item label="开始时间">
                        <a-input placeholder="开始时间"></a-input>
                    </a-form-item>
                    <a-form-item label="结束时间">
                        <a-input placeholder="结束时间"></a-input>
                    </a-form-item>
                    <a-form-item label="支付方式">
                        <a-select style="width: 160px">
                            <a-select-option value="">a</a-select-option>
                            <a-select-option value="lucy">b</a-select-option>
                            <a-select-option value="disabled">c</a-select-option>
                            <a-select-option value="Yiminghe">d</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="订单状态">
                        <a-select style="width: 160px">
                            <a-select-option value="">a</a-select-option>
                            <a-select-option value="lucy">b</a-select-option>
                            <a-select-option value="disabled">c</a-select-option>
                            <a-select-option value="Yiminghe">d</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="系统单号">
                        <a-input placeholder="系统单号"></a-input>
                    </a-form-item>
                    <a-form-item label="商户单号">
                        <a-input placeholder="商户单号"></a-input>
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
                        <div slot="remark" slot-scope="item">
                            {{item.systemOrder}}<br>{{item.remark}}
                        </div>
                        <div slot="status" slot-scope="item">
                            <span v-if="item.status===1" style="color: #FB4FA1;">订单超时</span>
                            <span v-if="item.status===2" style="color: #128CE6;">未支付</span>
                            <span v-if="item.status===3">已支付</span>
                        </div>
                        <div slot="action" slot-scope="item">
                            <img v-if="item.success===1" src="../assets/img/icon_budan_hover@1x.png" alt="" class="icon-bd pointer">
                            <a-dropdown v-if="item.success===0">
                                <img  src="../assets/img/icon_budan_default@1x.png" alt="" class="icon-bd pointer">
                                <a-menu slot="overlay" class="sk-ant-dropdown">
                                    <a-menu-item class="sk-ant-dropdown-menu-item" @click="bd(item)">补单</a-menu-item>
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
        name: "success",
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
                    status: 1,
                    success:0
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
                    status: 2,
                    success:1
                }],
                columns: [{
                    title: '系统单号\n备注信息',
                    scopedSlots: {customRender: 'remark'},
                }, {
                    title: '商户单号',
                    dataIndex: 'businessOrder',
                }, {
                    title: '创建时间',
                    dataIndex: 'createTime',
                }, {
                    title: '支付时间',
                    dataIndex: 'payTime'
                }, {
                    title: '金额',
                    dataIndex: 'amount',
                    align:"right"
                }, {
                    title: '类型',
                    dataIndex: 'type',
                }, {
                    title: '状态',
                    scopedSlots: {customRender: 'status'}
                },{
                    title: '收款账号',
                    dataIndex: 'account'
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
            bd:function(item){
                this.$confirm({
                    title: '你确认要设置该订单为成功状态吗?',
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
        components: {},
    }
</script>
<style scoped src="./account.css"></style>
<style scoped>
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