<template>
  <button class="sugar-btn" :class="classOption" @click="handle" :disabled="disabled">
    <i class="sugar-btn-icon" :class="icon" v-if="icon"></i>
    <transition name="sugar-btn-waiting-switch-ani" mode="out-in">
      <div v-if="waiting" class="sugar-btn-waiting-wrap" key="1">
        <svg class="sugar-btn-waiting" viewBox="25 25 50 50">
          <circle class="sugar-btn-waiting-path" cx="50" cy="50" r="23" fill="none" />
        </svg>
      </div>
      <span v-else key="2" class="sugar-btn-text flex-box-center">
        <slot></slot>
      </span>
    </transition>
  </button>
</template>
<script>
export default {
  name: 'sugar-button',
  components: {

  },
  props: {
    icon: {
      type: String,
      default() {
        return ''
      }
    },
    block: {
      type: Boolean,
      default() {
        return false
      }
    },
    light: {
      type: Boolean,
      default() {
        return false
      }
    },
    round: {
      type: Boolean,
      default() {
        return false
      }
    },
    theme: {
      type: String,
      default() {
        return ''
      }
    },
    size: {
      type: String,
      default() {
        return 'default'
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    },
    waiting: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {

    }
  },
  computed: {
    classOption() {
      return {
        "sugar-btn-block": this.block,
        "sugar-btn-light": this.light,
        "sugar-btn-round": this.round,
        "sugar-btn-waiting": this.waiting,
        ...this.getTheme(),
        ...this.getSize()
      }
    }
  },
  created: function () {

  },
  beforeMount: function () {

  },
  mounted: function () {

  },
  beforeDestroy: function () {

  },
  destroyed: function () {

  },
  methods: {
    getTheme() {
      let _theme = {};
      !!this.theme && (_theme[`sugar-btn-${this.theme}`] = true);
      (!!this.theme && !!this.light) && (_theme[`sugar-btn-light-${this.theme}`] = true)
      return _theme;
    },
    getSize() {
      let size = {};
      size[`sugar-btn-size-${this.size}`] = true
      return size
    },
    handle(event) {
      if (this.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      this.$emit("click", event);
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
<style lang="scss">
@import "./button.scss";
</style>
