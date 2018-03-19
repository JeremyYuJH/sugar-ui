<template>
  <div class="sugar-dialog" :class="{'sugar-dialog-theme-default':theme == 'default','sugar-dialog-theme-ios':theme == 'ios'}">
    <div class="sugar-dialog-title">{{title}}</div>
    <div class="sugar-dialog-content">
      <slot></slot>
    </div>
    <div class="sugar-dialog-footer">
      <sugar-button block :light="theme != 'ios'" @click="close('Cancel')" v-if="isConfirm">{{cancel}}</sugar-button>
      <sugar-button block theme="primary" @click="close('Ok')">{{ok}}</sugar-button>
    </div>
  </div>
</template>
<script>
export default {
  components: {

  },
  props: {
    title: {
      type: String,
      default: ''
    },
    ok: {
      type: String,
      default: '确定'
    },
    cancel: {
      type: String,
      default: '取消'
    },
    theme: {
      type: String,
      default: 'default'
    },
    isConfirm: {
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

  },
  beforeDestroy: function () {

  },
  destroyed: function () {

  },
  methods: {
    close(type) {
      this.$emit('onHandle', type === 'Ok');
      this.$emit(`on${type}`);
      this.$emit('popup-close');
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
<style lang="scss">
@import "./dialog.scss";
</style>
