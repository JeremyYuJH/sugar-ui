<template>
  <div :class="{'sugar-checkbox-group-horizontal':horizontal}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'sugar-checkbox-group',
  components: {

  },
  props: {
    value: {
      type: Array
    },
    horizontal: {
      type: Boolean,
      default: false
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
    this.init();
  },
  beforeDestroy: function () {

  },
  destroyed: function () {

  },
  methods: {
    init() {
      this.$children.map((checkbox) => {
        checkbox.setValue(this.value || [], this.change);
      })
    },
    change(val) {
      let i = this.value.findIndex((item) => {
        return item === val;
      })
      !!~i ? this.value.splice(i, 1) : this.value.push(val);
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
