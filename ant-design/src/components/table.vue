<template>

</template>
<script>
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        scopedSlots: {customRender: 'name2'},
    }, {
        title: 'Age',
        dataIndex: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
    }];
    const data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }, {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    }];

    export default {
        name: "table",
        data() {
            return {
                data:[{
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                }, {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                }, {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                }, {
                    key: '4',
                    name: 'Disabled User',
                    age: 99,
                    address: 'Sidney No. 1 Lake Park',
                }],
                columns:[{
                    title: 'Name',
                    dataIndex: 'name',
                    scopedSlots: {customRender: 'name2'},
                }, {
                    title: 'Age',
                    dataIndex: 'age',
                }, {
                    title: 'Address',
                    dataIndex: 'address',
                }]
            }
        },
        computed: {
            rowSelection() {
                const {selectedRowKeys} = this;
                return {
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
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
