<template>
  <div class="sugar-header" :class="className.join(' ')">
    <section class="sugar-header-center ">
      <slot></slot>
    </section>
    <section class="sugar-header-tools">
      <slot name="left">
        <button class="sugaric-back"></button>
      </slot>
    </section>
    <section class="sugar-header-tools sugar-header-tools-right">
      <slot name="right">
      </slot>
    </section>
  </div>
</template>
<script>
export default {
  name: 'sugar-header',
  components: {

  },
  props: {
    size: {
      type: String,
      default() {
        return 'default'
      }
    },
    theme: {
      type: String,
      default() {
        return 'default'
      }
    }
  },
  data() {
    return {
      className: [
        `sugar-header-size-${this.size}`,
        `sugar-header-theme-${this.theme}`
      ]
    }
  },
  computed: {

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

  },
  watch: {

  },
  directives: {

  }
}
</script>
<style lang="scss" >
@import "./header.scss";
</style>
