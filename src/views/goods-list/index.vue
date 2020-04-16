<template>
  <div class="goods-list">
    <a-alert style="margin-bottom:20px" message="可填写采购时间和采购人姓名来查询" banner />
    <a-form>
      <a-form-item
        label="时间选择"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-range-picker
          :default-value="[moment(listQuery.startDate, 'YYYY-MM-DD'), moment(listQuery.endDate, 'YYYY-MM-DD')]"
          format="YYYY-MM-DD"
          @change="change"
        />
      </a-form-item>
      <a-form-item label="姓名" :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }">
        <a-input v-model="listQuery.name" />
      </a-form-item>
      <a-form-item>
        <a-row>
          <a-col :span="5" :offset="5">
            <a-button type="primary" @click="getGoodsList">
              查询
            </a-button>
          </a-col>
          <a-col :span="5">
            <a-button
              :loading="excelLoading"
              typr="primary"
              @click="downloadExcel"
            >
              下载列表
            </a-button>
          </a-col>
        </a-row>
      </a-form-item>
    </a-form>
    <a-alert style="margin-bottom:20px" :message="`表格一共有${total}列数据，如展示不全请向右滑动表格`" banner />
    <a-table
      :columns="columns"
      :loading="loading"
      :data-source="goodsList"
      :pagination="false"
      bordered
      :scroll="{ x: 300 }"
    />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { goodsList } from '@/api/goods'
import { exportJson2Excel } from '@/utils/excel'
import { formatJson } from '@/utils'
const dayjs = require('dayjs')
const moment = require('moment')
const columns = [
  { title: '日期', dataIndex: 'time' },
  { title: '姓名', dataIndex: 'name' },
  { title: '住址', dataIndex: 'area' },
  { title: '联系方式', dataIndex: 'phone' },
  { title: '采购明细', dataIndex: 'foodInfo' }
]
@Component
export default class GoodsList extends Vue {
  private columns = columns
  private goodsList = []
  private loading = false
  private total = 0
   listQuery = {
     current: 1,
     pageSize: 100,
     startDate: dayjs(new Date(2020, 1, 1)).format('YYYY-MM-DD'),
     endDate: dayjs().format('YYYY-MM-DD'),
     name: ''
   }

  private time = []
  private value = []
  private excelLoading = false

  private created(): void {
    this.getGoodsList()
  }

  private moment = moment

  private async getGoodsList() {
    this.loading = true
    try {
      const result = await goodsList(this.listQuery)
      const { data } = result
      this.goodsList = data
      this.goodsList.forEach(item => {
        (item as any).key = (item as any).id.toString()
      })
      this.total = (result as any).total
      this.loading = false
    } catch (e) {
      this.loading = false
      console.log(e)
    }
  }

  private change(date: any, dates: any): void {
    this.listQuery.startDate = dates[0]
    this.listQuery.endDate = dates[1]
  }

  private downloadExcel() {
    this.excelLoading = true
    const tHeader = ['时间', '名字', '联系方式', '住宿地址', '物品']
    const filterVal = ['time', 'name', 'phone', 'area', 'foodInfo']
    const data = formatJson(filterVal, this.goodsList)
    exportJson2Excel(tHeader, data, '3B 3片区物品表')
    this.excelLoading = false
  }
}
</script>

<style lang="scss">
  .goods-list {
    width: 90%;
    margin: 0 auto;
    // .ant-table td { white-space: nowrap; }
  }
</style>
