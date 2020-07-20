<template>
  <div>
    <Card>
      <tables class="aaa" ref="tables" editable searchable search-place="top" v-model="userTableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getUserTableData } from '@/api/data'
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
          title: '用户编号',
          key: '_id'
        },
        {
          title: '信用代码',
          key: 'CreditCode'
        },
        {
          title: '身份证号',
          key: 'IDcard'
        },
        {
          title: '身份证正面',
          key: 'IDcard0path'
        },
        {
          title: '身份证反面',
          key: 'IDcard1path'
        },
        {
          title: '营业执照',
          key: 'IDcard2path'
        },
        {
          title: '详情',
          key: 'addressData'
        },
        {
          title: '申请状态',
          key: 'apply'
        },
        {
          title: '累计佣金',
          key: 'cash'
        },
        {
          title: '可提现佣金',
          key: 'cash-out'
        },
        {
          title: '优惠劵',
          key: 'coupon'
        },
        {
          title: '微信id',
          key: 'openid'
        },
        {
          title: '抖音号',
          key: 'tiktok'
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
                    vm.$emit('input', params.userTableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              }, [
                h('Button', '自定义删除')
              ])
            }
          ]
        }
      ],
      userTableData: []
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
    getUserTableData().then(res => {
      this.userTableData = res.data
    })
  }
}
</script>

<style>
  .aaa{
    overflow: hidden;
  }
</style>
