import components from '../assets/components.json'
let routers = [];
components.map((component) => {
  routers = routers.concat(component.list)
})
export default [
  {
    path: "/",
    component() {
      return import('../pages/Index.vue')
    }
  },
  {
    path: "/components",
    component() {
      return import('../pages/ShowCase.vue')
    }
  },
  ...routers.map((item) => {
    return {
      path: `/${item}`,
      component() {
        return import(`../pages/${item}.vue`)
      }
    }
  })
]
