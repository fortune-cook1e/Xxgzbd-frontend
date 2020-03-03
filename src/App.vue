<template>
  <a-locale-provider :locale="zhCN">
    <div id="app">
      <Banner />
      <div class="tabs">
        <a-tabs v-model="currentTab">
          <a-tab-pane key="1" tab="采购填写">
            <add-goods v-if="currentTab === '1'" />
          </a-tab-pane>
          <a-tab-pane key="2" tab="采购查询">
            <goods-list v-if="currentTab === '2'" />
          </a-tab-pane>
          <!-- <a-tab-pane key="3" tab="数据总览">
            <div class="content">
              <Total v-if="currentTab === '3'" :total-item="totalItem" />
            </div>
          </a-tab-pane>
          <a-tab-pane key="4" tab="疫情表格">
            <table-data :data-list="totalList" />
          </a-tab-pane>
          <a-tab-pane key="5" tab="实时播报" /> -->
        </a-tabs>
      </div>
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import Banner from '@/components/Banner'
import Total from '@/components/TotalData'
import TableData from '@/components/TableData'
import AddGoods from '@/components/AddGoods'
import GoodsList from '@/components/GoodsList'
import { getCityTotalData } from '@/api'
export default {
  name: 'App',
  components: {
    Banner,
    Total,
    TableData,
    AddGoods,
    GoodsList
  },
  data() {
    return {
      zhCN,
      totalList: undefined,
      totalItem: undefined,
      currentTab: '1'
    }
  },
  created() {
    this.getTotalData()
  },
  methods: {
    /**
     * @description 获取所有地区综合数据以及综合数据
     */
    async getTotalData() {
      try {
        const result = await getCityTotalData()
        console.log(result)
        const { data } = result
        this.totalList = data
        this.totalItem = this.totalList.find(item => item.id === 8)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

