import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'
import { Route } from 'vue-router'

router.afterEach((to: Route) => {
  // Finish progress bar
  NProgress.done()

  // set page title
  document.title = to.meta.title
})
