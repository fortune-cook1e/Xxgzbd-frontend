<template>
  <div class="home">
    <Banner />
    <div class="tabs">
      <a-tabs
        v-model="currentTab"
        @change="tabChange"
      >
        <a-tab-pane
          v-for="item in tabPanes"
          :key="item.key"
          :tab="item.label"
        >
          <!-- 渲染的路由 -->
          <router-view />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Banner from '@/components/Banner/index.vue'
@Component({
  components: {
    Banner
  }
})
export default class Home extends Vue {
  // data
  private currentTab:string = 'totalData'
  private tabPanes:{[prop:string]:string}[] = [
    {
      label: '数据纵览',
      key: 'totalData'
    },
    {
      label: '疫情表格',
      key: 'areaData'
    },
    {
      label: '采购填写',
      key: 'addGoods'
    },
    {
      label: '采购查询',
      key: 'goodsList'
    }
  ]

  // tab 改变时切换路由
  private tabChange(key:string):void {
    this.$router.push({
      name: key
    })
  }
}
</script>

<style lang='scss' scoped>

</style>
