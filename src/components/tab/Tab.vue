<template>
  <div class="sugar-tab">
    <slot></slot>
    <div class="sugar-tab-active-bar" :class="track?`sugar-tab-active-bar-track-${track}`:''" :style="{'left':`${activeBarStyleLeft}%`,'right':`${activeBarStyleRight}%`}"></div>
  </div>
</template>
<script>
export default {
  name: 'sugar-tab',
  components: {

  },
  data() {
    return {
      activeIndex: 0,
      total: -1,
      track: ''
    }
  },
  computed: {
    activeBarStyleLeft() {
      return ~this.total ? this.activeIndex * (100 / this.total) : 0;
    },
    activeBarStyleRight() {
      return ~this.total ? (this.total - 1 - this.activeIndex) * (100 / this.total) : 0;
    }
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
      if (this.$children.length < 1) {
        return;
      }
      this.total = this.$children.length;
      this.$children.map((item, index) => {
        !!item.setIndex && item.setIndex(index);
      })
      this.changeSelected();
    },
    changeSelected() {
      this.$children.map((item, index) => {
        item.setSelected(this.activeIndex);
      })
    },
    changeActiveIndex(index) {
      this.activeIndex = index;
    }
  },
  watch: {
    activeIndex(newValue, oldValue) {
      this.track = newValue > oldValue ? 'forward' : 'back'
      this.changeSelected();
    }
  },
  directives: {

  }
}
</script>
<style lang="scss" >
@import "./tab.scss";
</style>
