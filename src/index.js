import {
  Style,
  NavBar,
  PageContent,
  WebApp,
  Button,
  CheckBox,
  CheckBoxGroup,
  Radio,
  RadioGroup,
  Switch,
  GroupList,
  GroupItem,
  Grid,
  GridItem,
  Scroll,
  Popup,
  Picker,
  Dialog,
  Cell
} from './components/index'

const components = [
  Style,
  NavBar,
  PageContent,
  WebApp,
  Button,
  CheckBox,
  CheckBoxGroup,
  Radio,
  RadioGroup,
  Switch,
  Scroll,
  GroupList,
  GroupItem,
  Grid,
  GridItem,
  Cell
]

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true;
  components.map((component) => {
    component.install(Vue);
  })
  Vue.prototype.$SugarPopup = Popup;
  Vue.prototype.$SugarPicker = Picker;
  Vue.prototype.$SugarDialog = Dialog;
}

export default {
  install
}
