<template>
  <div class="login">
    <a-spin :spinning="loading">
      <div class="login-content">
        <div class="login-content-top">
          <p>
            <a-icon type="desktop" />
            荆州新型冠状病毒管理系统
          </p>
        </div>
        <div class="login-content-main">
          <h3 class="login-title">
            账号密码登录
          </h3>
          <a-form>
            <a-form-item>
              <a-input
                v-model="form.username"
                placeholder="Username"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model="form.password"
                type="password"
                placeholder="Password"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-row type="flex" justify="space-between">
                <a-col :span="8">
                  <a-button type="primary" class="form-btn" @click="login">Login</a-button>
                </a-col>
                <a-col :span="8">
                  <a-button type="default" class="form-btn" @click="signUp">Sign In</a-button>
                </a-col>
              </a-row>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user.ts'
import { LoginModel } from '@/models/paramsModels.ts'
import { message } from 'ant-design-vue'
@Component({})
export default class Login extends Vue {
  private form: LoginModel = {
    username: '',
    password: ''
  }

  private loading: boolean = false

  // methods
  private async login(e: any) {
    try {
      await UserModule.login(this.form)
      this.$router.push({
        name: 'home'
      })
    } catch (e) {
      console.log(e)
    }
  }

  private async signUp() {
    try {
      const result = await UserModule.register(this.form)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang='scss' scoped>
  .login {
    width: 100%;
    height: 100%;
    background-color: $login-bg;
    &-content {
      &-top {
        text-align: center;
        padding-top: 4rem;
        margin: 0 auto;
        font-size: 1.2rem;
        font-weight: 400;
      }
      &-main {
        width: 90%;
        margin: 3rem auto 0;
        .login-title {
          text-align: center;
          margin-bottom: 1rem;
        }
        .form-btn {
          width: 100%;
        }
      }
    }
  }
</style>
