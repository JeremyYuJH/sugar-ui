<template>
  <div class="sugar-radio">
    <input type="radio" ref="sugar-radio" :disabled="disabled" :value="value" @change="change" :name="name">
    <span></span>
    <label>
      <slot></slot>
    </label>
  </div>
</template>
<script>
export default {
  name: "sugar-radio",
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {

  },
  data() {
    return {
      checked: false,
      name: ''
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
    setName(name) {
      this.name = name;
    },
    setValue(defaultValue, fn) {
      this.changeValEvent = fn;
      this.checked = (defaultValue === this.value);
      this.checked && (this.$refs['sugar-radio'].checked = true);
    },
    change(e) {
      !!this.changeValEvent && this.changeValEvent(this.value);
    }
  },
  watch: {
  },
  directives: {
  }
}
</script>
<style lang="scss">
@import "./radio.scss";
</style>
