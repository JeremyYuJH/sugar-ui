<template>
  <header class="sugar-nav-bar has-nav" :class="{'sugar-nav-bar-no-border':noborder,'sugar-nav-bar-theme-ios':isIos}">
    <div class="sugar-nav-bar-wrap">
      <section class="nav-bar-tool">
        <slot name="left">
          <button>
            <i class="sugaric-back" @click="back"></i>
          </button>
        </slot>
      </section>
      <span class="nav-bar-title">
        <slot></slot>
      </span>
      <section class="nav-bar-tool" style="right:0">
        <slot name="right">

        </slot>
      </section>
    </div>
  </header>
</template>
<script>
export default {
  name: 'sugar-nav-bar',
  components: {

  },
  props: {
    noborder: {
      type: Boolean,
      default: false
    },
    backHandle: {
      type: Function
    }
  },
  data() {
    return {
      isIos: !navigator.userAgent.match(/android/i)
    }
  },
  computed: {

  },
  created: function () {

  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.$el.parentNode.className = `${this.$el.parentNode.className} has-nav`
  },
  beforeDestroy: function () {

  },
  destroyed: function () {

  },
  methods: {
    back() {
      !!this.backHandle ? this.backHandle() : this.$router.go(-1)
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
