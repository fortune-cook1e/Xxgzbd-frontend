import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { userRegister, userLogin } from '@/api/user'
import { setToken, getToken } from '@/utils/cookie'

export interface IUserState {
  username:string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public username = ''

  @Mutation
  private SET_NAME(name:string) {
    this.username = name
  }

  @Action
  public async login(userInfo:any) {
    try {
      const result = await userLogin(userInfo)
      const { token } = result as any
      setToken(token, {})
      console.log(getToken())
    } catch (e) {
      console.log(e)
    }
  }

  @Action
  public register(userInfo:any) {

  }
}

export const UserModule = getModule(User)
