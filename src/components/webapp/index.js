import NavBar from './NavBar.vue'
import PageContent from './PageContent.vue'
import WebApp from './WebApp.vue'
NavBar.install = (Vue) => {
  Vue.component(NavBar.name, NavBar)
}
PageContent.install = (Vue) => {
  Vue.component(PageContent.name, PageContent)
}
WebApp.install = (Vue) => {
  Vue.component(WebApp.name, WebApp)
}

export {
  NavBar,
  PageContent,
  WebApp
}
