import GroupList from './GroupList.vue';
import GroupItem from './GroupItem.vue';

GroupList.install = (Vue) => {
  Vue.component(GroupList.name, GroupList)
}

GroupItem.install = (Vue) => {
  Vue.component(GroupItem.name, GroupItem)
}

export {
  GroupList,
  GroupItem
};
