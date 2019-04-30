<template>
    <container>
        <h3 class="h3-title">
            客服管理
            <btn-delete style="margin-left: 40px;" v-show="selectedRows.length>0"></btn-delete>
            <a-button type="primary" class="fr" @click="edit(null)"
                      style="background-image: linear-gradient(-90deg, #FDD34F 7%, #FBB134 93%);border: 0">
                <a-icon type="plus"/>
                添加客服
            </a-button>
        </h3>

        <div class="m28">
            <search>
                <a-form slot="search" layout="inline">
                    <a-form-item label="用户ID">
                        <a-input></a-input>
                    </a-form-item>
                    <a-form-item label="手机号">
                        <a-input></a-input>
                    </a-form-item>
                    <a-form-item label="IP">
                        <a-input></a-input>
                    </a-form-item>
                    <a-form-item label="客服状态">
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
                        <div slot="status" slot-scope="status">
                            <span v-if="status===1">正常</span>
                            <span v-if="status===2" style="color: #1798F0;">冻结</span>
                            <span v-if="status===3" style="color: #FB4FA1;">不正常</span>
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
            </a-form>
        </a-modal>
    </container>
</template>

<script>
    export default {
        name: "customer",
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
                    name: "尼古拉斯",
                    IP: "123.123.123.123",
                    status: 1,
                }, {
                    key: '2',
                    id: 2,
                    name: "尼古拉斯",
                    IP: "123.123.123.123",
                    status: 2,
                }],
                columns: [{
                    title: '用户ID',
                    dataIndex: 'id',
                    // scopedSlots: {customRender: 'name2'},
                }, {
                    title: '用户名',
                    dataIndex: 'name',
                }, {
                    title: 'IP',
                    dataIndex: 'IP',
                }, {
                    title: '状态',
                    dataIndex: 'status',
                    scopedSlots: {customRender: 'status'}
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
        components: {},
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
<style scoped>
    .act {
        width: 18px;
        height: 18px;
        vertical-align: middle;
    }
</style>