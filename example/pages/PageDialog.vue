<template>
  <sugar-page-content style="padding:2px 0">
    <sugar-nav-bar slot="nav">
      Dialog
    </sugar-nav-bar>
    <sugar-cell @click="handle('default')">
      Default
    </sugar-cell>
    <sugar-cell @click="handle('ios')">
      Theme ios
    </sugar-cell>
    <sugar-cell @click="handle('default',true)">
      Default - confirm true
    </sugar-cell>
    <sugar-cell @click="handle('ios',true)">
      Theme ios - confirm true
    </sugar-cell>
    <sugar-cell @click="handle('default',false,true)">
      Default - Render
    </sugar-cell>
    <sugar-cell @click="handle('ios',false,true)">
      Theme ios - Render
    </sugar-cell>
    <sugar-cell @click="handle('default',true,true)">
      Default - confirm true - Render
    </sugar-cell>
    <sugar-cell @click="handle('ios',true,true)">
      Theme ios - confirm true - Render
    </sugar-cell>
  </sugar-page-content>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      option: {
        title: 'Dialog',
        content: 'Hello...',
        onHandle(res) {
          console.log(`handle: ${res}`);
        },
        onOk() {
          console.log('Ok');
        },
        onCancel() {
          console.log('Cancel');
        }
      }
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
    handle(theme, isConfirm = false, isRender = false) {
      if (isRender) {
        this.option = {
          ...this.option,
          render(h) {
            return h('sugar-radio-group', {}, [
              h('sugar-radio', {
                props: {
                  value: 0
                }
              }, 'html'),
              h('sugar-radio', {
                props: {
                  value: 1
                }
              }, 'css'),
              h('sugar-radio', {
                props: {
                  value: 2
                }
              }, 'javascript')
            ])
          }
        }
      }
      new this.$SugarDialog({
        ...this.option,
        theme,
        isConfirm
      })
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
