<template>
  <div class="total">
    <div class="total-content">
      <h3 class="total-time">
        数据截止 {{ time }}
      </h3>
      <div class="total-num">
        <a-row>
          <a-col :span="8" class="total-num-item">
            <p class="sure-num">
              <strong>{{ totalItem.sureNum }}</strong>
            </p>
            <p>现存确诊</p>
          </a-col>
          <a-col :span="8" class="total-num-item">
            <p class="sus-num">
              <strong>{{ totalItem.susNum }}</strong>
            </p>
            <p>现存疑似</p>
          </a-col>
          <a-col :span="8" class="total-num-item">
            <p class="died-num">
              <strong>{{ totalItem.diedNum }}</strong>
            </p>
            <p>累计死亡</p>
          </a-col>
          <a-col :span="8" class="total-num-item">
            <p class="cure-num">
              <strong>{{ totalItem.cureNum }}</strong>
            </p>
            <p>累计治愈</p>
          </a-col>
          <a-col :span="8" class="total-num-item">
            <p class="es-num">
              <strong>{{ totalItem.esNum }}</strong>
            </p>
            <p>累计密切接触</p>
          </a-col>
          <a-col :span="8" class="total-num-item">
            <p class="ob-num">
              <strong>{{ totalItem.obNum }}</strong>
            </p>
            <p>累计医学观察</p>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
const dayjs = require('dayjs')
interface TotalItem {
  readonly id: number;
  cityId: number;
  cureNum: number;
  susNum: number;
  diedNum: number;
  sureNum: number;
  curingNum: number;
  esNum: number;
  obNum: number;
  cityName: string;
}
@Component
export default class Total extends Vue {
  @Prop({ default: () => [] }) private totalItem!: TotalItem

  time: string = dayjs().format('YYYY-MM-DD hh:mm:ss')

  private created(): void {
    console.log(this.time)
  }
}
</script>

<style lang="scss">
  .total {
    .total-content {
      .total-time {
        color: #666;
        font-size: .8rem;
      }
      .total-num {
        background: #fff;
        border-radius: 5px;
        border: 1px solid #ebebeb;
        box-shadow: 0 0.04rem 0.12rem 0 rgba(0,0,0,.05);
        padding: 1rem 0;
        .total-num-item {
          text-align: center;
          p {
            margin-bottom: .1rem;
          }
          .sure-num {
          color: rgb(247, 76, 49);
          font-size: 1.3rem;
          font-weight: 400;
          }
          .sus-num {
            color: rgb(247, 130, 7);
            font-size: 1.3rem;
            font-weight: 400;
          }
          .died-num {
            color: rgb(93, 112, 146);
            font-size: 1.3rem;
            font-weight: 400;
          }
          .cure-num {
            color: rgb(40, 183, 163);
            font-size: 1.3rem;
            font-weight: 400;
          }
          .es-num {
            color: rgb(162, 90, 78);
            font-size: 1.3rem;
            font-weight: 400;
          }
          .ob-num {
            color: rgb(174, 33, 44);
            font-size: 1.3rem;
            font-weight: 400;
          }
        }
      }
    }
  }
</style>
