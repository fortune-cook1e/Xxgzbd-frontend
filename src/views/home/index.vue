<template>
  <div class="home">
    <Banner />
    <Menu />

    <div class="content">
      <!-- 路由渲染出口 -->
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/Menu/index.vue'
import Banner from '@/components/Banner/index.vue'
@Component({
  components: {
    Banner,
    Menu
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
  private tabClick():void {
    this.$router.push({
      name: this.currentTab
    })
  }
}
</script>

<style lang='scss' scoped>
  .home {
    .content {
      padding: 10px 0 0 0;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
</style>
