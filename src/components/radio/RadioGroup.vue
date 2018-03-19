<template>
  <div :class="{'sugar-radio-group-horizontal':horizontal}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "sugar-radio-group",
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  components: {

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
      let name = `sugar-radio-${new Date().getTime()}-${Math.floor(Math.random() * 100000)}`;
      this.$children.map((radio) => {
        radio.setName(name);
        radio.setValue(this.value, (value) => {
          this.$emit('input', value);
        });
      })
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
