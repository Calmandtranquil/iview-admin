<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getTableData } from '@/api/data'
export default {
  name: 'tables_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        // { title: '商品名称', key: 'name', sortable: true },
        // { title: '邮箱', key: 'email', editable: true },
        // { title: '创建时间', key: 'createTime' },
        {
          title: '商品编号',
          key: '_id'
        },
        {
          title: '商品标题',
          key: 'title'
        },
        {
          title: '商品图片',
          key: 'cover'
        },
        {
          title: '商品描述',
          key: 'describe'
        },
        {
          title: '商品价格',
          key: 'price'
        },
        {
          title: '服务费',
          key: 'commission'
        },
        {
          title: '租金',
          key: 'ratio'
        },
        {
          title: '企业',
          key: 'enterprise'
        },
        {
          title: '参数',
          key: 'parameterlist'
        },
        {
          title: '商品类型',
          key: 'type'
        },
        {
          title: '状态',
          key: 'status'
        },
        {
          title: '销量',
          key: 'sale'
        },
        {
          title: '创建时间',
          key: 'date'
        },
        {
          title: '操作',
          key: 'handle',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              }, [
                h('Button', '自定义删除')
              ])
            }
          ]
        }
      ],
      tableData: []
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res.data
    })
  }
}
</script>

<style>

</style>
