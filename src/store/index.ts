import { IUserState } from './modules/user'
import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export interface IRootState {
  user:IUserState
}

export default new vuex.Store<IRootState>({})
