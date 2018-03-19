<template>
  <ul class="sugar-list-item-warp" v-show="data.length > 0 || !autoIteration">
    <li class="sugar-list-item">
      <div @click="toggleHideHanlde" class="sugar-list-group-bar">
        <slot name="group-bar"></slot>
      </div>
      <ul class="sugar-list-group-item" ref="group-item" v-if="autoIteration">
        <slot name="group-item" v-for="item in data" :row="item"></slot>
      </ul>
      <ul class="sugar-list-group-item" ref="group-item" v-else>
        <slot name="group-item" :rows="data"></slot>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'sugar-group-item',
  components: {

  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    nav: {
      type: String,
      default() {
        return ''
      }
    },
    toggleHide: {
      type: Boolean,
      default() {
        return false
      }
    },
    autoIteration: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      height: 0
    }
  },
  computed: {
  },
  created: function () {

  },
  beforeMount: function () {

  },
  mounted: function () {
    this.height = this.$refs['group-item'].offsetHeight
  },
  beforeDestroy: function () {

  },
  destroyed: function () {

  },
  methods: {
    toggleHideHanlde() {
      // let el = this.$refs['group-item'];
      // el.style.height = `${el.offsetHeight > 0 ? 0 : this.height}px`;
      // this.$nextTick(this.$parent.$parent.init);
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
