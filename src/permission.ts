import { getToken } from '@/utils/cookie'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'

router.beforeEach((to: Route, from: Route, next:any) => {
  NProgress.start()

  const { username = '' } = UserModule

  if (getToken()) {
    if (to.name === 'login') {
      next({ name: 'home' })
      NProgress.done()
    } else {
      next()
      NProgress.done()
    }
  } else {
    if (to.name === 'login') {
      next()
    } else {
      next({
        name: 'login'
      })
    }
    NProgress.done()
  }
})
