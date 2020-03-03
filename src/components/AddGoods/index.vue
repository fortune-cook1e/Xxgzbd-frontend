<template>
  <div class="add-goods">
    <a-alert message="填写时间为下午6点到晚上10点" banner />
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item
        label="姓名"
      >
        <a-input
          v-decorator="['name',{rules: [{ required: true, message: '请输入姓名' }]}]"
          placeholder="您的姓名"
          allow-clear
        />
      </a-form-item>

      <a-form-item
        label="联系方式"
      >
        <a-input
          v-decorator="['phone',{rules: [{ required: true, message: '请输入联系方式' }]}]"
          placeholder="联系方式"
          allow-clear
        />
      </a-form-item>
      <a-form-item label="住址">
        <a-input
          v-decorator="['area',{rules: [{ required: true, message: '请输入详细地址' }]}]"
          placeholder="住址 例:解放路xxx号xx单元xxx"
          allow-clear
        />
      </a-form-item>
      <a-form-item label="物品类型">
        <a-select
          v-decorator="['foodType',{rules: [{ required: false}]}]"
          mode="multiple"
          placeholder="选择物资类型 食品/药品"
          allow-clear
        >
          <a-select-option :value="1">食品</a-select-option>
          <a-select-option :value="2">药品</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="物品详情">
        <a-textarea
          v-decorator="['foodInfo',{rules: [{ required: false}]}]"
          allow-clear
          placeholder="您需要的物品"
          :rows="6"
        />
      </a-form-item>
      <a-form-item>
        <a-row>
          <a-col :span="5">
            <a-button html-type="submit" type="primary">提交</a-button>
          </a-col>
          <a-col :span="5" :offset="1">
            <a-button type="default" @click="resetForm">
              重新填写
            </a-button>
          </a-col>
        </a-row>
      </a-form-item>
    </a-form>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { addGoods } from '@/api/goods'
import { message } from 'ant-design-vue'
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
  // form: Form = {
  //   name: '',
  //   foodType: [],
  //   foodInfo: '',
  //   time: dayjs().format('YYYY-MM-DD'),
  //   phone: '',
  //   area: ''
  // }

  // form = this.$form.createForm(this)

  private beforeCreate() {
    // form必须在boforeCreate 创建 表单验证提示才能生效
    this.form = this.$form.createForm(this)
  }

  private created() {
    console.log(this.form)
  }

  private resetForm() {
    this.form.resetFields()
  }

  async handleSubmit(e:any) {
    e.preventDefault()
    try {
      this.form.validateFields(async(err:any, values:any) => {
        if (!err) {
          console.log(values)
          const form = Object.assign({}, values, { time: dayjs().format('YYYY-MM-DD') })
          await addGoods(form)
          message.success('提交成功')
          this.form.resetFields()
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
