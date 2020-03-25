<template>
  <div class="home">
    <Banner />
    <div class="tabs">
      <a-tabs v-model="currentTab">
        <a-tab-pane key="1" tab="数据总览">
          <total-data v-if="currentTab === '1'" :total-item="totalItem" />
        </a-tab-pane>
        <a-tab-pane key="2" tab="疫情表格">
          <table-data :data-list="totalList" />
        </a-tab-pane>
        <a-tab-pane key="3" tab="实时播报" />
        <a-tab-pane key="4" tab="采购填写">
          <add-goods v-if="currentTab === '4'" />
        </a-tab-pane>
        <a-tab-pane key="5" tab="采购查询">
          <goods-list v-if="currentTab === '5'" />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Banner from '@/components/Banner/index.vue'
import TotalData from '@/components/TotalData/index.vue'
import TableData from '@/components/TableData/index.vue'
import AddGoods from '@/components/AddGoods/index.vue'
import GoodsList from '@/components/GoodsList/index.vue'
import { getCityTotalData } from '@/api/city'
@Component({
  components: {
    Banner,
    TotalData,
    TableData,
    AddGoods,
    GoodsList
  }
})
export default class Home extends Vue {
  // data
  private totalList:any = []
  private totalItem:any = []
  private currentTab:string = '1'

  // methods
  private async geTotalData() {
    try {
      const result = await getCityTotalData()
      const { data } = result
      this.totalList = data
      this.totalItem = this.totalList.find((item:any) => item.id === 8)
    } catch (e) {
      console.log(e)
    }
  }

  // life-circles
  created():void {
    this.geTotalData()
  }
}
</script>

<style lang='scss' scoped>

</style>
