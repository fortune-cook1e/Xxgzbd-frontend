<template>
  <div class="login">
    <a-spin :spinning="loading">
      <div class="login-content">
        <div class="login-content-top">
          <p>
            <a-icon type="desktop" />荆州新型冠状病毒管理系统
          </p>
        </div>
        <div class="login-content-main">
          <h3 class="login-title">账号密码登录</h3>
          <a-form-model ref="form" :model="form" :rules="rules">
            <a-form-model-item prop="username">
              <a-input v-model="form.username" placeholder="Username">
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-model-item>
            <a-form-model-item prop="password">
              <a-input v-model="form.password" type="password" placeholder="Password">
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 0 }">
              <a-button type="primary" @click="login">Login</a-button>
              <a-button type="default" style="margin-left:10px" @click="signUp">Sign Up</a-button>
            </a-form-model-item>
          </a-form-model>
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
// @ts-ignore
import { UserModule } from "@/store/modules/user.ts";
// @ts-ignore
import { LoginModel } from "@/models/paramsModels.ts";
import { message } from "ant-design-vue";
// @ts-ignore
import { setToken, getToken } from "@/utils/cookie.ts";
@Component({})
export default class Login extends Vue {
  private form: LoginModel = {
    username: "",
    password: ""
  };

  private rules = {
    username: [
      {
        required: true,
        message: "Please input your username",
        trigger: "blur"
      },
      { min: 6, max: 12, message: "Length shoule be  6 to 12", trigger: "blur" }
    ],
    password: [
      {
        required: true,
        message: "Please input your password",
        trigger: "blur"
      },
      { min: 6, message: "Password shoule be greater then 6", trigger: "blur" }
    ]
  };

  private loading: boolean = false;

  // methods
  private async login() {
    try {
      (this.$refs.form as any).validate(async (valid: any) => {
        if (valid) {
          await UserModule.login(this.form);
          this.$router.push({
            name: "home"
          });
        } else {
          console.log("submit error");
          return false;
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  private async signUp() {
    try {
      const result = await UserModule.register(this.form);
      const { msg } = result as any;
      message.info(msg);
    } catch (e) {
      console.log(e);
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
