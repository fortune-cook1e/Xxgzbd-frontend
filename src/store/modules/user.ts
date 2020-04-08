import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { userRegister, userLogin } from '@/api/user'
import { setToken, getToken } from '@/utils/cookie'
import { RegisterModel, LoginModel } from '@/models/paramsModels'

export interface IUserState {
  username:string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public username = ''
  public token = ''

  @Mutation
  private SET_NAME(name:string) {
    this.username = name
  }

  @Mutation
  private SET_TOKEN(token:string) {
    this.token = token
  }

  @Action
  public async login(userInfo:LoginModel) {
    try {
      const result = await userLogin(userInfo)
      const { token } = result as any
      setToken(token, {})
      this.SET_TOKEN(token)
    } catch (e) {
      console.log(e)
    }
  }

  @Action
  public async register(payload:RegisterModel) {
    try {
      const result = await userRegister(payload)
      return result
    } catch (e) {
      console.log(e)
    }
  }
}

export const UserModule = getModule(User)
