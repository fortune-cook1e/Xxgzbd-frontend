<template>
  <div class="banner">
    <img :src="bannerSrc" alt="banner">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
declare function require(img: string): string
const bannersrc = require('@/assets/banner.jpg')

@Component
export default class Banner extends Vue {
  private bannerSrc = bannersrc;
}

</script>

<style lang="scss">
  .banner {
    width: 100%;
    img {
      width: 100%;
      display: block;
      border:none;
    }
  }
</style>
