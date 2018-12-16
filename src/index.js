import { components } from './components/component.js'

export default {
    install: (Vue) => {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}