<template>
    <container>
        <h3 class="h3-title">
            通用码
            <a-button type="primary" class="fr" @click="edit(null)"
                      style="background-image: linear-gradient(-90deg, #FDD34F 7%, #FBB134 93%);border: 0">
                <a-icon type="plus"/>
                添加通用码
            </a-button>
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
                    <a-form-item class="fr">
                        <a-button type="primary">
                            搜索
                        </a-button>
                    </a-form-item>
                </a-form>
                <div slot="table">
                    <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data" :pagination="pagination"
                             @change="aa">
                        <div slot="code" slot-scope="item">
                            <span v-if="item.code===1">已上传</span>
                            <span v-else style="color: #FB4FA1;">未上传</span>
                        </div>
                        <div slot="status" slot-scope="item">
                            <span v-if="item.status===1">使用中</span>
                            <span v-else style="color: #50D7B2;">空闲</span>
                        </div>
                        <div slot="action" slot-scope="item">
                            <div class="inline-block-act" @click="edit(item)">
                                <edit></edit>
                            </div>
                            <div class="inline-block-act" @click="deleteItem(item)">
                                <deleteIcon></deleteIcon>
                            </div>
                        </div>
                    </a-table>
                </div>
            </search>
        </div>
        <a-modal
                :title="title"
                v-model="visible"
                okText="确认"
                cancelText="取消"
                @ok="handleOk">
            <a-form>
                <a-form-item>
                    <label for="3" class="label">二维码
                        <span class="rule">请将二维码图片制作成230px*230px的图片进行上传</span>
                    </label>
                    <div>
                        <a-upload style="display: inline-block;overflow: hidden;vertical-align: bottom"
                                name="avatar"
                                listType="picture-card"
                                class="avatar-uploader"
                                :showUploadList="false"
                                :beforeUpload="beforeUpload"
                                @change="handleChange">
                            <img v-if="imageUrl" :src="imageUrl" alt="avatar"  class="code-img fl"/>
                            <div v-else class="code-img fl">
                                <div style="padding-top: 43px">
                                    <a-icon type="plus" />
                                    <div class="ant-upload-text">上传</div>
                                </div>
                            </div>
                        </a-upload>
                        <a-upload name="avatar" v-if="imageUrl" :beforeUpload="beforeUpload" @change="handleChange" :showUploadList="false">
                            <div class="reupload">
                                <refresh></refresh>
                                重新上传
                            </div>
                        </a-upload>
                    </div>

                </a-form-item>
                <a-form-item>
                    <label class="label">金额
                        <span class="rule">只能上传通用码</span>
                    </label>
                    <a-input/>
                </a-form-item>
                <a-form-item>
                    <label class="label">整额
                        <span class="rule">只能上传通用码</span>
                    </label>
                    <a-input/>
                </a-form-item>
                <a-form-item>
                    <label class="label">收款账号
                        <span class="rule">将二维码绑定到收款账号</span>
                    </label>
                    <a-select>
                        <a-select-option value="">a</a-select-option>
                        <a-select-option value="lucy">b</a-select-option>
                        <a-select-option value="disabled">c</a-select-option>
                        <a-select-option value="Yiminghe">d</a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </a-modal>
    </container>
</template>

<script>
    import refresh from '../components/refresh'
    export default {
        name: "common",
        data() {
            return {
                imageUrl:'',
                title: '',
                visible: false,
                pagination: {
                    total: 100//默认每页10条
                },
                data: [{
                    key: '1',
                    id: 1,
                    account: "微信测试(微信)",
                    amount: "通用",
                    realAmount: "通用",
                    code:1,
                    status: 1,
                }, {
                    key: '2',
                    id: 2,
                    account: "微信测试(微信)",
                    amount: "通用",
                    realAmount: "通用",
                    code:2,
                    status: 2,
                }],
                columns: [{
                    title: '#',
                    dataIndex: 'id',
                    // scopedSlots: {customRender: 'name2'},
                }, {
                    title: '收款账号',
                    dataIndex: 'account',
                }, {
                    title: '整额',
                    dataIndex: 'amount',
                }, {
                    title: '真实金额',
                    dataIndex: 'realAmount'
                }, {
                    title: '二维码',
                    scopedSlots: {customRender: 'code'},
                }, {
                    title: '状态',
                    scopedSlots: {customRender: 'status'},
                }, {
                    title: '操作',
                    key: 'action',
                    scopedSlots: {customRender: 'action'},
                }
                ],
                selectedRows: []
            }
        },
        methods: {
            beforeUpload:function(file, fileList){
                this.imageUrl=window.URL.createObjectURL(file);
            },
            handleChange:function(){

            },
            handleOk: function () {

            },
            aa: function (p) {
                alert(JSON.stringify(p));
            },
            edit: function (item) {
                this.imageUrl='';
                if (item) {
                    this.title = "修改通用码";
                } else {
                    this.title = "添加通用码";
                }
                this.visible = !this.visible;
            },
            deleteItem: function (item) {
                this.$confirm({
                    title: '确认要删除该用户吗？',
                    content: '包括他的一切数据',
                    okText: '确定',
                    okType: 'danger',
                    cancelText: '取消',
                    iconType: "warning",
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
            refresh
        },
        computed: {
            rowSelection() {
                const {selectedRowKeys} = this;
                return {
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                        this.selectedRows = selectedRows;
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
<style scoped src="./account.css"></style>
<style>
    .ant-upload-select-picture-card .ant-upload-text {
        margin-top: 8px;
        color: #666;
    }
</style>
<style scoped>
    .reupload{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #128CE6;
        line-height: 14px;
        display: inline-block;
        cursor: pointer;
    }
    .code-img{
        width: 132px;
        height: 132px;
        display: block;
    }
    .act {
        width: 18px;
        height: 18px;
        vertical-align: middle;
    }
</style>