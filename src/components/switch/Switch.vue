<template>
  <div class="sugar-switch">
    <input type="checkbox" v-model="switchValue" :disabled="disabled">
    <i></i>
  </div>
</template>
<script>
export default {
  name: "sugar-switch",
  components: {

  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      switchValue: this.value
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
    switchValue: function (newVal) {
      this.$emit('input', newVal);
    }
  },
  directives: {

  }
}
</script>
<style lang="scss">
@import "./switch.scss";
</style>

