import CheckBox from './CheckBox.vue';
import CheckBoxGroup from './CheckBoxGroup.vue'

CheckBox.install = (Vue) => {
  Vue.component(CheckBox.name, CheckBox)
}
CheckBoxGroup.install = (Vue) => {
  Vue.component(CheckBoxGroup.name, CheckBoxGroup)
}

export {
  CheckBox,
  CheckBoxGroup
};
