<template>
  <div class="sugar-tab-item" @click="selectHandle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'sugar-tab-item',
  components: {

  },
  data() {
    return {
      index: -1,
      selected: false
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
    setIndex(index) {
      this.index = index;
    },
    getIndex() {
      return this.index;
    },
    setSelected(index) {
      this.selected = this.index === index;
    },
    selectHandle() {
      !!this.$parent.changeActiveIndex && this.$parent.changeActiveIndex(this.index);
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
