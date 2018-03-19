import Index from '../pages/Index.vue'
import ShowCase from '../pages/ShowCase.vue'
import Button from "../pages/PageButton.vue";
import CheckBox from "../pages/PageCheckBox.vue"
import Viewer from "../pages/PageViewer.vue"
import Popup from "../pages/PagePopup.vue"
import Picker from "../pages/PagePicker.vue"
import Switch from '../pages/PageSwitch.vue'
import Scroll from '../pages/PageScroll.vue'
import GroupList from '../pages/PageGroupList.vue'
import Grid from '../pages/PageGrid.vue'
import Radio from '../pages/PageRadio.vue'
import Dialog from '../pages/PageDialog.vue'
import Cell from '../pages/PageCell.vue'

export default [
  {
    path: "/",
    component: Index
  },
  {
    path: "/components",
    component: ShowCase
  },
  {
    path: "/button",
    component: Button
  },
  {
    path: "/checkbox",
    component: CheckBox
  },
  {
    path: "/radio",
    component: Radio
  },
  {
    path: "/viewer",
    component: Viewer
  },
  {
    path: "/popup",
    component: Popup
  },
  {
    path: "/picker",
    component: Picker
  },
  {
    path: "/switch",
    component: Switch
  },
  {
    path: "/scroll",
    component: Scroll
  },
  {
    path: "/groupList",
    component: GroupList
  },
  {
    path: "/grid",
    component: Grid
  },
  {
    path: "/dialog",
    component: Dialog
  },
  {
    path: "/cell",
    component: Cell
  }
];
