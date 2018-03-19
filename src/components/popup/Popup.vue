<template>
  <div>
    <transition name="sugar-popup-mask" @after-leave="popupMaskAfterLeave">
      <div class="sugar-popup-mask" v-if="displayMask && state >= 0"></div>
    </transition>
    <transition :name="'sugar-popup-' + position" @after-leave="popupContainerAfterLeave">
      <div class="sugar-popup-container" :style="containerStyle" :class="'sugar-popup-' + position" v-if="state >= 1">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Popup',
  components: {

  },
  props: {
    position: {
      type: String,
      default() {
        return 'right'
      }
    },
    size: {
      type: null,
      default() {
        return 'full'
      }
    }
  },
  data() {
    return {
      state: -1,
      display: {
        mask: false
      },
      containerStyle: {
        width: this.getContainerStyleWidth(),
        height: this.getContainerStyleHeight()
      }
    }
  },
  computed: {
    displayMask() {
      return this.size != 'full' || this.position == 'center';
    }
  },
  created: function () {
    Object.assign(this.containerStyle,
      this.getContainerStyleTopBottom(),
      this.getContainerStyleLeftRight())
    if (this.position == 'center') {
      Object.assign(this.containerStyle,
        this.getContainerStyleCenter(), {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 'auto'
        })
    }
  },
  beforeMount: function () {

  },
  mounted: function () {
    this.state = 1;
  },
  beforeDestroy: function () {

  },
  destroyed: function () {
    document.body.removeChild(this.$el);
  },
  methods: {
    close() {
      this.state = 0
    },
    popupContainerAfterLeave() {
      this.state = -1;
      if (this.size == 'full') {
        this.$destroy();
      }
    },
    popupMaskAfterLeave() {
      this.$destroy();
    },
    getContainerStyleWidth() {
      if (~'left,right'.indexOf(this.position)) {
        return this.sizeStyle();
      } else if (this.position == 'center') {
        return '100%'
      } else {
        return '100%'
      }
      // return 'left,right'.indexOf(this.position) > -1 ? this.sizeStyle() : '100%'
    },
    getContainerStyleHeight() {
      if ('left,right'.indexOf(this.position) > -1) {
        return '100%';
      } else if (this.position == 'center') {
        return '100%'
      } else {
        return this.sizeStyle();
      }
      // return 'left,right'.indexOf(this.position) > -1 ? '100%' : this.sizeStyle();
    },
    getContainerStyleTopBottom() {
      if ('left,right,top'.indexOf(this.position) > -1) {
        return {
          top: 0
        };
      }
      else if (this.position == 'bottom') {
        return {
          bottom: 0
        }
      }
      return {}
    },
    getContainerStyleLeftRight() {
      if ('left,top,bottom'.indexOf(this.position) > -1) {
        return {
          left: 0
        };
      }
      else if (this.position == 'right') {
        return {
          right: 0
        }
      }
      return {}
    },
    getContainerStyleCenter() {
      if (this.size != null && typeof this.size == 'object') {
        if (!this.size.width) {
          return {
            width: '80%'
          }
        } else if (!this.size.height) {
          return {
            height: 'auto'
          }
        }
      }
      else if (typeof this.size == 'string') {
        return {
          width: this.size,
          height: this.size
        }
      }
      else if (!this.size) {
        return {
          width: '80%',
          height: 'auto'
        }
      }
    },
    sizeStyle() {
      return this.size == 'full' ? '100%' : `${this.size}px`
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
<style lang="scss">
@import "./popup.scss";
</style>

