<template>
  <div class="login">
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
        <a-form
          :form="loginForm"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                { rules: [{ required: true, message: 'Please input your username!' }] },
              ]"
              placeholder="Username"
            >
              <a-icon slot="prefix" style="color:#40a9ff" type="user" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: 'Please input your Password!' }] },
              ]"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" style="color:#40a9ff" type="lock" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <div class="login-btns">
              <a-button type="primary" class="login-form-button" @click="login">
                Log in
              </a-button>
              <a-button class="login-form-button" @click="signUp">
                Sign Up
              </a-button>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Login extends Vue {
  // data
  private loginForm = this.$form.createForm(this)

  // methods
  private login():void {

  }

  private signUp():void {

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
        .login-btns {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .login-form-button {
            width: 40%;
          }
        }
      }
    }
  }
</style>
