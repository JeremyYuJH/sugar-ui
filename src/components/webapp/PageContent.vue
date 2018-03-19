<template>
  <div class="sugar-app-page" :class="{'sugar-app-page-light':light}">
    <slot name="nav"></slot>
    <div class="page-contant" :class="contantClass">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sugar-page-content',
  components: {

  },
  props: {
    contantClass: {
      type: [String, Object],
      default: ''
    },
    light: {
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
