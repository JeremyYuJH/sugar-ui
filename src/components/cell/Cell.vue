<template>
  <div class="sugar-cell">
    <section class="sugar-cell-label">
      <slot></slot>
    </section>
    <section class="sugar-cell-value">
      <slot name="value"></slot>
    </section>
    <section class="sugar-cell-icon" @click="$emit('click')">
      <slot name="icon">
        <i class="sugaric-arrow" v-if="isArrow"></i>
      </slot>
    </section>
  </div>
</template>
<script>
export default {
  name: 'sugar-cell',
  props: {
    isArrow: {
      type: Boolean,
      default: true
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
@import "./cell.scss";
</style>
