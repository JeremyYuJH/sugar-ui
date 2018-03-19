import Vue from 'vue';
import PopupView from './Popup.vue'

class Popup {
  constructor(PageComponent, PageComponentOption = {}, popupOption = {}) {
    PageComponentOption.on = PageComponentOption.on || {}
    Object.assign(PageComponentOption.on, {
      'popup-close': () => {
        this.close();
      }
    })
    this.instance = new Vue({
      el: document.createElement('div'),
      render: function (createElement) {
        return createElement(
          PopupView,
          popupOption,
          [
            createElement(
              PageComponent,
              PageComponentOption,
              PageComponentOption.render ? [PageComponentOption.render(createElement)] : this.$slots.default
            )
          ]
        )
      }
    })
    document.body.appendChild(this.instance.$el);
  }
  close() {
    if (this.instance.$children.length < 1) {
      return;
    }
    this.instance.$children[0].close();
  }
}
export default Popup
