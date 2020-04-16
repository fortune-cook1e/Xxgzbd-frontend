<template>
  <div class="table-data">
    <a-spin :spinning="loading">
      <a-table
        :columns="columns"
        :data-source="tableList"
        :pagination="false"
      />
    </a-spin>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { getCityTotalData } from '@/api/city'
interface Column {
  title: string;
  dataIndex: string;
  key: string;
  width?: string;
}
@Component
export default class TableData extends Vue {
  private dataList = []
  private loading:boolean = false

  private columns = [
    {
      title: '市区名',
      dataIndex: 'cityName',
      key: 'cityName',
      width: '12.5%'
    },
    {
      title: '确诊人数',
      dataIndex: 'sureNum',
      key: 'sureNum',
      width: '12.5%'
    },
    {
      title: '死亡人数',
      dataIndex: 'diedNum',
      key: 'diedNum',
      width: '12.5%'
    },
    {
      title: '治愈人数',
      dataIndex: 'cureNum',
      key: 'cureNum',
      width: '12.5%'
    },
    {
      title: '疑似人数',
      dataIndex: 'susNum',
      key: 'susNum',
      width: '12.5%'
    },
    {
      title: '在院治疗人数',
      dataIndex: 'curingNum',
      key: 'curingNum',
      width: '12.5%'
    },
    {
      title: '密切接触人数',
      dataIndex: 'esNum',
      key: 'esNum',
      width: '12.5%'
    },
    {
      title: '医学观察人数',
      dataIndex: 'obNum',
      key: 'obNum',
      width: '12.5%'
    }
  ]

  // computed
  get tableList() {
    let array: Array<any> = []
    if (this.dataList.length > 0) {
      this.dataList.forEach((item) => {
        (item as any).key = (item as any).id
      })
      array = this.dataList
    }
    return array
  }

  // methods
  private async getTableData() {
    try {
      this.loading = true
      const result = await getCityTotalData()
      const { data } = result
      this.dataList = data
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }

  // life-circle
  private created():void {
    this.getTableData()
  }
}
</script>

<style lang="scss">
  .table-data {
    .ant-table {
      font-size: .6rem;
    }
  }
</style>
