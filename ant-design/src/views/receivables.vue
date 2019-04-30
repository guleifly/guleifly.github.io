
<template>
    <container class="receive">
        <h3 class="h3-title">
            收款账号
            <a-button type="primary" class="fr" @click="edit(null)"
                      style="background-image: linear-gradient(-90deg, #FDD34F 7%, #FBB134 93%);border: 0">
                <a-icon type="plus"/>
                添加收款账号
            </a-button>
            <div class="fr" @click="settingVisible=!settingVisible">
                <setting class="icon"></setting>
            </div>
            <div class="fr"  @click="keyVisible=!keyVisible">
                <password class="fr icon" ></password>
            </div>
        </h3>

        <div class="m28">
            <search>
                <a-form slot="search" layout="inline">
                    <a-form-item label="收款账号">
                        <a-select style="width: 160px">
                            <a-select-option value="">a</a-select-option>
                            <a-select-option value="lucy">b</a-select-option>
                            <a-select-option value="disabled">c</a-select-option>
                            <a-select-option value="Yiminghe">d</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="类型">
                        <a-select style="width: 160px">
                            <a-select-option value="">a</a-select-option>
                            <a-select-option value="lucy">b</a-select-option>
                            <a-select-option value="disabled">c</a-select-option>
                            <a-select-option value="Yiminghe">d</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="状态">
                        <a-select style="width: 160px">
                            <a-select-option value="">a</a-select-option>
                            <a-select-option value="lucy">b</a-select-option>
                            <a-select-option value="disabled">c</a-select-option>
                            <a-select-option value="Yiminghe">d</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item class="fr">
                        <a-button type="primary">
                            搜索
                        </a-button>
                    </a-form-item>
                </a-form>
                <div slot="table" class="table">
                    <a-table :columns="columns" :dataSource="data" :pagination="pagination" @change="aa">
                        <div slot="c" slot-scope="item" class="amount">
                            <div>{{item.c}}</div>
                        </div>
                        <div slot="d" slot-scope="item" class="amount">
                            <div style="color: #FB4FA1;">{{item.d}}</div>
                        </div>
                        <div slot="e" slot-scope="item">
                            {{item.e11}}元/{{item.e12}}笔/ <span style="color: #002500;">{{item.e13}}%</span> <br>

                        </div>
                        <div slot="f" slot-scope="item">
                            {{item.e11}}元/{{item.e12}}笔/ <span style="color: #002500;">{{item.e13}}%</span> <br>
                        </div>
                        <div slot="g" slot-scope="item">
                            <a-tooltip placement="right">
                                <template slot='title'  overlayClassName="tips">
                                    <div class="tips">APP监控组</div>
                                </template>
                                <div style="display: inline-block"><computer class="icon2"></computer></div>
                            </a-tooltip>
                            <mobile class="icon2 green"></mobile>
                        </div>
                        <div slot="h" slot-scope="item">
                            <a-tooltip placement="right">
                                <template slot='title'  overlayClassName="tips">
                                    <div class="tips">ceshi</div>
                                </template>
                                <div style="display: inline-block"><computer class="icon2 red"></computer></div>
                            </a-tooltip>
                            <mobile class="icon2 blue"></mobile>
                        </div>
                        <div slot="i" slot-scope="item">
                            <span>{{item.i===1?'显示':'不显示'}}</span>
                        </div>
                        <div slot="j" slot-scope="item">
                            <a-switch disabled v-model="item.j"/>
                        </div>
                        <div slot="action" slot-scope="item">
                            <div class="inline-block-act" @click="edit(item)"><edit></edit></div>
                            <div class="inline-block-act" @click="singleVisible=!singleVisible"><single></single></div>
                            <a-dropdown >
                                <div class="inline-block-act"><more></more></div>
                                <a-menu slot="overlay" class="sk-ant-dropdown">
                                    <a-menu-item class="sk-ant-dropdown-menu-item" @click="codeVisible=!codeVisible">二维码管理</a-menu-item>
                                    <a-menu-item class="sk-ant-dropdown-menu-item">请在APP中开启</a-menu-item>
                                    <a-menu-item class="sk-ant-dropdown-menu-item" @click="deleteItem(item)">删除</a-menu-item>
                                </a-menu>
                            </a-dropdown>

                        </div>
                    </a-table>
                </div>
            </search>
        </div>
        <a-modal
                wrapClassName="modal-edit"
                :title="title"
                v-model="visible"
                okText="确认"
                cancelText="取消"
                @ok="handleOk">
            <a-form class="modal-confirm">
                <a-form-item>
                    <label for="3" class="label">账号
                        <span class="rule">该账号不能为空,如果实在不想泄露账号可随意填写一个虚拟账号</span>
                    </label>
                    <a-input id="3" placeholder="请输入收款账号"/>
                </a-form-item>
                <a-form-item>
                    <label class="label">类型 (费率)
                        <span class="rule">类型是指该收款账号的账号类型，请正确勾选</span>
                    </label>
                    <div>
                        <a-radio-group :options="type"/>
                    </div>

                    <!--@change="onChange1"-->
                </a-form-item>
                <a-form-item>
                    <label class="label">二维码类型
                        <span class="rule">类型是指该收款账号的账号类型，请正确勾选</span>
                    </label>
                    <div>
                        <a-radio-group :options="code"/>
                    </div>
                    <!--@change="onChange1"-->
                </a-form-item>
                <a-form-item>
                    <label class="label">限制时间
                        <span class="rule">限制收款账户相同金额收款时间,输入 0 表示不限制，以秒为单位</span>
                    </label>
                    <a-input placeholder="请输入"/>
                </a-form-item>
                <a-form-item>
                    <label class="label">单笔最小金额
                        <span class="rule">请输入收款账户收款单笔最小金额</span>
                    </label>
                    <a-input placeholder="请输入"/>
                </a-form-item>
                <a-form-item>
                    <label class="label">单笔最大金额
                        <span class="rule">请输入收款账户收款单笔最大金额</span>
                    </label>
                    <a-input placeholder="请输入"/>
                </a-form-item>
                <a-form-item>
                    <label class="label">收款人姓名
                        <span class="rule">收款人姓名（仅限转银行卡模式使用）</span>
                    </label>
                    <a-input placeholder="请输入"/>
                </a-form-item>
                <a-form-item>
                    <label class="label">收款人卡号
                        <span class="rule">收款人卡号（仅限转银行卡模式使用）</span>
                    </label>
                    <a-input placeholder="请输入"/>
                </a-form-item>
                <a-form-item>
                    <label class="label">银行卡ID
                        <span class="rule">收款人银行卡ID（仅限转银行卡模式使用）</span>
                    </label>
                    <a-input placeholder="请输入"/>
                </a-form-item>
                <a-form-item>
                    <label class="label">开户行

                    </label>
                    <a-select>
                        <a-select-option value="">a</a-select-option>
                        <a-select-option value="lucy">b</a-select-option>
                        <a-select-option value="disabled">c</a-select-option>
                        <a-select-option value="Yiminghe">d</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item>
                    <label class="label">收款额度
                        <span class="rule">收款额度每日更新，使用完以后自动关闭收款，输入 -1 表示不限额，输入 0 表示关闭该收款账号</span>
                    </label>
                    <a-input placeholder="请输入"/>
                </a-form-item>
                <a-form-item>
                    <label class="label">回调方式

                    </label>
                    <a-select>
                        <a-select-option value="">a</a-select-option>
                        <a-select-option value="lucy">b</a-select-option>
                        <a-select-option value="disabled">c</a-select-option>
                        <a-select-option value="Yiminghe">d</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item>
                    <label class="label">开启轮询

                    </label>
                    <div>
                        <a-radio-group :options="code"/>
                    </div>
                </a-form-item>
                <a-form-item>
                    <label class="label">运行端口

                    </label>
                    <div>
                        <a-radio-group :options="code"/>
                    </div>
                </a-form-item>
            </a-form>
        </a-modal>
        <a-modal
                title="通讯key"
                v-model="keyVisible"
                okText="确认"
                cancelText="取消"
                @ok="handleOk2">
            <a-form>
                <a-form-item>
                    <label for="3" class="label">商户ID</label>
                    <a-input id="3" placeholder="请输入商户ID"/>
                </a-form-item>
                <a-form-item>
                    <label class="label">
                        异步通知通讯KEY
                        <a-button type="primary" style="background-image: linear-gradient(-90deg, #FDD34F 7%, #FBB134 93%);border: 0">
                            重新生成
                        </a-button>
                    </label>
                    <a-input/>
                </a-form-item>
                <a-form-item>
                    <label class="label">PC监控通信KEY</label>
                    <a-input/>
                </a-form-item>
            </a-form>
        </a-modal>
        <a-modal
                title="单通道测试"
                v-model="singleVisible"
                okText="确认"
                cancelText="取消"
               >
            <a-form>
                <a-form-item>
                    <label for="3" class="label">测试金额 <span class="rule">请输入测试金额</span></label>
                    <a-input id="3" placeholder="请输入测试金额"/>
                </a-form-item>
                <a-form-item>
                    <label class="label">
                        回调地址
                    </label>
                    <a-input/>
                </a-form-item>
            </a-form>
        </a-modal>
        <a-modal
                title="轮询模式"
                v-model="settingVisible"
                okText="确认"
                cancelText="取消">
            <a-form>
                <a-form-item v-bind="formItemLayout" :label="item.value" formLayout='horizontal' v-for="item in list">
                    <a-select>
                        <a-select-option value="" v-for="item2 in item.list">{{item2.v}}</a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </a-modal>
        <a-modal
                title="二维码管理"
                v-model="codeVisible"
                :footer="null"
        >
            <div class="wrap-code">
                <div style="height: 32px;">
                    <btn-delete @click="deleteItem(null)" v-show="selectedRows.length>0"></btn-delete>
                </div>
                <div>
                    <a-table :rowSelection="rowSelection" :columns="columnsCode" :dataSource="dataCode">
                        <div slot="number" slot-scope="item">
                            {{item.sk}}/{{item.used}}
                        </div>
                        <div slot="status" slot-scope="item">
                            <span :class="{'FB4FA1':item.status===2}">{{item.status===1?"正常":"全部使用"}}</span>
                        </div>
                        <div slot="action" slot-scope="item">
                            <div class="inline-block-act" @click="deleteItem2(item)"><deleteIcon></deleteIcon></div>
                        </div>
                    </a-table>
                </div>
            </div>
        </a-modal>
    </container>
</template>

<script>
    import password from"../components/password"
    import setting from"../components/setting"
    import computer from"../components/computer"
    import mobile from"../components/mobile"
    import more from"../components/more"
    import single from"../components/single"
    export default {
        name: "receivables",
        data() {
            return {
                keyVisible:false,
                settingVisible:false,
                singleVisible:false,
                codeVisible:false,
                title:'',
                visible:false,
                list:[
                    {
                        value:"支付宝",
                        list:[
                            {
                                k:"a",
                                v:"v"
                            }
                        ]
                    },
                    {
                        value:"微信",
                        list:[
                            {
                                k:"a",
                                v:"v"
                            }
                        ]
                    },
                    {
                        value:"云闪付",
                        list:[
                            {
                                k:"a",
                                v:"v"
                            }
                        ]
                    },
                    {
                        value:"瑞银支付宝",
                        list:[
                            {
                                k:"a",
                                v:"v"
                            }
                        ]
                    }
                ],
                type:[
                    { label: '支付宝（3%）', value: '支付宝（3%）' },
                    { label: '微信（3%）', value: '微信（3%）' },
                    { label: '云闪付（3%）', value: '云闪付（3%）' }
                ],
                code:[
                    { label: '固码', value: '固码' },
                    { label: '通码', value: '通码' }
                ],
                formItemLayout: {
                    labelCol: {
                        xs: { span: 8 },
                        sm: { span: 4 },
                    },
                    wrapperCol: {
                        xs: { span: 24 },
                        sm: { span: 16 },
                    },
                },
                pagination:{
                    total:100//默认每页10条
                },
                dataCode: [{
                    key: '1',
                    id: 1,
                    price: "1.00",
                    sk:1,
                    used:2,
                    status: 1,
                }, {
                    key: '2',
                    id: 2,
                    price: "1.00",
                    sk:1,
                    used:2,
                    status: 2,
                }],
                columnsCode: [{
                    title: '价格',
                    dataIndex: 'price',
                    // scopedSlots: {customRender: 'name2'},
                }, {
                    title: '收款码数量/已使用数量',
                    scopedSlots: {customRender: 'number'},
                },{
                    title: '状态',
                    dataIndex: 'status',
                    scopedSlots: {customRender: 'status'}
                }, {
                    title: '操作',
                    key: 'action',
                    scopedSlots: {customRender: 'action'},
                }
                ],
                data: [{
                    key: '1',
                    id: 1,
                    a:"主动收款",
                    b:"支付宝",
                    c:'40000.00',
                    d:'34506.98',
                    e11:11,
                    e12:12,
                    e13:13,
                    f:"11.00元/11笔/\n" + "成交率22%",
                    g:1,
                    h:1,
                    i:1,
                    j:true
                },
                    {
                        key: '2',
                        id: 2,
                        a:"主动收款",
                        b:"支付宝",
                        c:'40000.00',
                        d:'34506.98',
                        e11:11,
                        e12:12,
                        e13:13,
                        f:"11.00元/11笔/\n" + "成交率22%",
                        g:1,
                        h:1,
                        i:1,
                        j:true
                    }],
                columns: [{
                    title: '#',
                    dataIndex: 'id',
                }, {
                    title: '收款账号',
                    dataIndex: 'a',
                }, {
                    title: '类型',
                    dataIndex: 'b',
                },{
                    title: '额度',
                    scopedSlots: {customRender: 'c'}
                },{
                    title: '已用额度',
                    scopedSlots: {customRender: 'd'}
                },{
                    title: '今日收款',
                    scopedSlots: {customRender: 'e'}
                },{
                    title: '昨日收款',
                    scopedSlots: {customRender: 'f'}
                },{
                    title: '在线',
                    scopedSlots: {customRender: 'g'}
                },{
                    title: '监控',
                    scopedSlots: {customRender: 'h'}
                },{
                    title: 'SDK',
                    scopedSlots: {customRender: 'i'}
                },{
                    title: '状态',
                    scopedSlots: {customRender: 'j'}
                },{
                    title: '操作',
                    key: 'action',
                    scopedSlots: { customRender: 'action' },
                }
                ],
                selectedRows:[]
            }
        },
        methods:{
            handleOk2:function(){

            },
            handleOk:function(){

            },
            aa:function (p) {
                alert(JSON.stringify(p));
            },
            edit:function (item) {
                if(item){
                    this.title="修改收款账号";
                }else{
                    this.title="添加收款账号";
                }
                this.visible=!this.visible;
            },
            deleteItem:function (item) {
                this.$confirm({
                    title: '确认要删除该收款账号吗？',
                    content: '删除关于该收款账号的一切数据!',
                    okText: '确定',
                    okType: 'danger',
                    cancelText: '取消',
                    iconType:"warning",
                    onOk() {
                        console.log('OK');
                    },
                    onCancel() {
                        console.log('Cancel');
                    },
                });
            },
            deleteItem2:function (item) {
                this.$confirm({
                    title: '确认要删除二维码吗？',
                    content: '及相关数据',
                    okText: '确定',
                    okType: 'danger',
                    cancelText: '取消',
                    iconType:"warning",
                    onOk() {
                        console.log('OK');
                    },
                    onCancel() {
                        console.log('Cancel');
                    },
                });
            }
        },
        components: {
            password,setting, computer,mobile,more,single
        },
        computed: {
            rowSelection() {
                const {selectedRowKeys} = this;
                return {
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                        this.selectedRows=selectedRows;
                    },
                    getCheckboxProps: record => ({
                        props: {
                            disabled: record.name === 'Disabled User', // Column configuration not to be checked
                            name: record.name,
                        }
                    }),
                }
            }
        },
    }
</script>
<style>
    .FB4FA1{
        color: #FB4FA1;
    }
    .modal-edit .ant-modal{
        width: 800px!important;
    }
    .receive .icon2 svg{
        width: 24px;
        height: 24px;
        color: #bbb;
    }
    .receive  .icon2.green svg{
        color: green;
    }
    .receive  .icon2.red svg{
        color: red;
    }
    .receive  .icon2.blue svg{
        color: blue;
    }
</style>
<style scoped>
    /*.tips{*/
        /*background: #FFFFFF;*/
        /*box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);*/
        /*font-family: PingFangSC-Regular;*/
        /*font-size: 14px;*/
        /*color: #666666;*/
        /*text-align: center;*/
        /*line-height: 14px;*/
    /*}*/
    .sk-ant-dropdown-menu-item{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #128CE6;
        text-align: center;
    }
    .sk-ant-dropdown{
        border: 1px solid #128CE6;
        border-radius: 4px;
    }
    .amount{
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #50D7B2;
        text-align: right;
    }

    .icon{
        width: 24px;
        height: 24px;
        margin-right: 22px;
        margin-top: 4px;
        cursor: pointer;
        color: #bbb;
    }

    .icon:hover{
        color: #128CE6;
    }
    .act{
        width: 18px;
        height: 18px;
        vertical-align: middle;
        margin-right: 20px;
    }
</style>
<style scoped src="./account.css"></style>