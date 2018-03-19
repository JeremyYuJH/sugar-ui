<template>
  <section id="sugar-app">
    <transition name="sugar-ani-page">
      <keep-alive :include="cachePages">
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>
<script>
export default {
  name: 'sugar-web-app',
  components: {

  },
  props: {
    cachePages: {
      type: [Array, String],
      default() {
        return []
      }
    }
  },
  data() {
    return {
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
<style lang="scss">
@import "./webapp.scss";
</style>
