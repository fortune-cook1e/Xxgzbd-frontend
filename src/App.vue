<template>
  <a-locale-provider :locale="zhCN">
    <div id="app">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'App',
  data() {
    return {
      zhCN
    }
  }
}
</script>

<style lang="scss">
  .fade-enter-active,.fade-leave-active {
    transition: all .3s ease;
  }
  .fade-enter,.fade-leave-to {
    opacity: 0;
  }
</style>

