<template>
  <div class="sugar-grid-box" :class="gridClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'sugar-grid',
  components: {

  },
  props: {
    col: {
      type: Number,
      default() {
        return 0
      }
    },
    spacing: {
      type: String,
      default: ''
    },
    vertical: {
      type: String,
      default: ''
    },
    square: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      className: 'sugar-grid-box',
      gridClass: {},
      itemsCount: 0
    }
  },
  computed: {
    rowCount() {
      return Math.ceil(this.itemsCount / this.col);
    },
    spacingSize() {
      switch (this.spacing) {
        case "default":
          return '10';
        case "small": {
          return '5'
        }
        case "1x": {
          return '1'
        }
        default: {
          return ''
        }
      }
    }
  },
  created: function () {
    this.gridClass[`${this.className}-${this.col}`] = !this.spacing;
    this.gridClass[`${this.className}-${this.col}-${this.spacingSize}`] = !!this.spacing;
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
      this.itemsCount = this.$children.length;
      this.setItemVerticalSize();
      this.setItemSquareSize();
    },
    setItemVerticalSize() {
      if (!this.vertical) {
        return;
      }
      let _length = this.col ? (this.rowCount - 1) * this.col : this.$children.length;
      for (let i = 0; i < _length; i++) {
        this.$children[i].$el.style.marginBottom = this.vertical;
      }
    },
    setItemSquareSize() {
      if (!this.square) {
        return;
      }
      this.$children.map((item) => {
        item.$el.style.height = `${this.$children[0].$el.offsetWidth}px`
      })
    }
  },
  watch: {
    vertical() {
      this.setItemVerticalSize();
    },
    square() {
      this.setItemSquareSize();
    }
  },
  directives: {

  }
}
</script>
<style lang="scss">
@import "./grid.scss";
</style>
