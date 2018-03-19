import DialogView from './Dialog.vue';
import Popup from '../popup/index.js'

class Dialog {
  constructor(option) {
    let optionOn = {};
    let optionProps = {};
    let render = option.render ? option.render : (createElement) => {
      return createElement(
        'span',
        {},
        option.content
      )

    }
    for (let o in option) {
      !!~o.indexOf('on') && (optionOn[o] = option[o]);
      !~o.indexOf('on,render,content') && (optionProps[o] = option[o]);
    }
    let options = {
      props: {
        ...optionProps
      },
      on: {
        ...optionOn
      }
    }
    new Popup(DialogView,
      {
        ...options,
        render
      },
      {
        props: {
          position: 'center'
        }
      }
    );
  }
}

export default Dialog;
