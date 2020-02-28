<template>
  <a-locale-provider :locale="zhCN">
    <div id="app">
      <Banner />
      <div class="tabs">
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="数据总览">
            <div class="content">
              <Total v-if="totalItem" :total-item="totalItem" />
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="疫情表格">
            <table-data :data-list="totalList" />
          </a-tab-pane>
          <a-tab-pane key="3" tab="疫情地图" />
          <a-tab-pane key="4" tab="实时播报" />
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
import { getCityTotalData } from '@/api'
export default {
  name: 'App',
  components: {
    Banner,
    Total,
    TableData
  },
  data() {
    return {
      zhCN,
      totalList: undefined,
      totalItem: undefined
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

