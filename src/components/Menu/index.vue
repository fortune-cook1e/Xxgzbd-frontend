<template>
  <div class="menu">
    <a-menu
      v-model="currentMenu"
      mode="horizontal"
      @click="itemClick"
    >
      <a-menu-item
        v-for="item in menuItems"
        :key="item.key"
      >
        {{ item.label }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Menu extends Vue {
  // data
  private currentMenu = ['totalData']
  private menuItems = [
    {
      key: 'totalData', label: '数据总览'
    },
    {
      key: 'areaData', label: '疫情表格'
    },
    {
      key: 'addGoods', label: '采购填写'
    },
    {
      key: 'goodsList', label: '采购查询'
    }
  ]

  // methods
  private itemClick(item:any): void {
    const { key } = item
    this.$router.push({
      name: key
    })
  }
}
</script>

<style lang='scss' scoped>

</style>
