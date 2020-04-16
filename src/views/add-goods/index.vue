<template>
  <div class="add-goods">
    <a-alert
      message="填写时间为下午6点到晚上10点"
      banner
    />
    <a-form-model ref="goodsForm" :model="form" :rules="rules">
      <a-form-model-item label="姓名" prop="name">
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item label="联系方式" prop="phone">
        <a-input v-model="form.phone" />
      </a-form-model-item>
      <a-form-model-item label="住址" prop="area">
        <a-input v-model="form.area" />
      </a-form-model-item>
      <a-form-model-item label="物品类型" prop="foodType">
        <a-select v-model="form.foodType" mode="multiple">
          <a-select-option :value="1">食品</a-select-option>
          <a-select-option :value="2">药品</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="物品详情" prop="foodInfo">
        <a-textarea v-model="form.foodInfo" :rows="6" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" @click="handleSubmit">
          提交
        </a-button>
        <a-button type="default" @click="resetForm">
          重置
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { addGoods } from '@/api/goods'
import { message } from 'ant-design-vue'
import { AddGoodsModel } from '@/models/paramsModels'
import dayjs from 'dayjs'
interface Form {
  name: string;
  foodType: Array<number>;
  foodInfo: string;
  time: number;
  phone: string;
  area: string;
}
@Component
export default class AddGoods extends Vue {
  private form:AddGoodsModel = {
    name: '',
    foodType: [],
    foodInfo: '',
    time: dayjs().format('YYYY-MM-DD'),
    phone: '',
    area: ''
  }

  private rules = {
    name: [
      { required: true, message: 'Please input your name', trigger: 'blur' }
    ],
    foodType: [
      { required: true, message: 'Please select food type', trigger: 'change' }
    ],
    foodInfo: [
      { required: true, message: 'Please input your food info', trigger: 'blur' }
    ],
    phone: [
      { required: true, message: 'Phone number', trigger: 'blur' }
    ],
    area: [
      { required: true, message: 'Please input your home address', trigger: 'blur' }
    ]
  }

  // methods
  private resetForm() {
    (this.$refs.goodsForm as any).resetFields()
  }

  private handleSubmit(e:any) {
    e.preventDefault()
    try {
      const form = Object.assign({}, this.form);
      (this.$refs.goodsForm as any).validate(async(valid:boolean) => {
        if (valid) {
          await addGoods(form)
          this.$message.success('提交成功')
          console.log('successs')
        } else {
          console.log('submit error')
          return false
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
  .add-goods {
    width: 80%;
    margin: 0 auto;
  }
</style>
