<template>
  <div class="sugar-checkbox-wrap" :class="{'sugar-checkbox-checked':checked,'sugar-checkbox-disabled':disabled}">
    <input type="checkbox" :disabled="disabled" @change="updateValue($event.target.checked)" v-bind:checked="checked">
    <span>
      <transition name="checkbox-ani">
        <i class="sugaric-ok" v-if="checked"></i>
      </transition>
    </span>
    <label>
      <slot></slot>
    </label>
  </div>
</template>
<script>
export default {
  name: 'sugar-checkbox',
  components: {

  },
  props: {
    value: {
      type: [Boolean, Number, String]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: false
    }
  },
  computed: {

  },
  created: function () {
    typeof this.value === 'boolean' && (this.checked = !!this.value);
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
    updateValue(value) {
      this.$emit('input', value);
      this.checked = value;
      !!this.changeValEvent && this.changeValEvent(this.value);
    },
    setValue(value, fn) {
      this.changeValEvent = fn;
      let i = value.findIndex((item) => {
        return item === this.value;
      })
      this.checked = !!~i;
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
<style lang="scss">
@import "./checkbox.scss";
</style>
