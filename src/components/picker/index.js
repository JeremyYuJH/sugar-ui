import PickerView from './Picker.vue'
import Popup from '../popup/index.js'

class Picker {
  constructor(option = {}) {
    let optionOn = {};
    let optionProps = {};
    for (let o in option) {
      !!~o.indexOf('on') && (optionOn[o] = option[o]);
      !~o.indexOf('on') && (optionProps[o] = option[o]);
    }
    let options = Object.assign({}, {
      props: {
        ...optionProps
      },
      on: {
        ...optionOn
      }
    });
    this.instance = new Popup(PickerView,
      {
        ...options
      },
      {
        props: {
          position: 'bottom',
          size: 260
        }
      }
    );
  }
  close() {
    // if (this.instance.$children.length < 1) {
    //   return;
    // }
    // this.instance.$children[0].close();
  }
}
export default Picker
