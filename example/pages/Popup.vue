<template>
  <sugar-page-content>
    <sugar-nav-bar slot="nav">
      Popup
    </sugar-nav-bar>
    <sugar-cell v-for="(item,index) in data" :key="index" @click="handle({
            position: item.position,
            size:item.size || 'full'
          })">
      {{item.title}}
    </sugar-cell>
  </sugar-page-content>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      data: [
        {
          position: 'top',
          title: 'Top'
        },
        {
          position: 'bottom',
          title: 'Bottom'
        },
        {
          position: 'left',
          title: 'Left'
        },
        {
          position: 'right',
          title: 'Right'
        },
        {
          position: 'center',
          title: 'Center'
        },
        {
          position: 'top',
          size: 50,
          title: 'Top Size 50'
        },
        {
          position: 'bottom',
          size: 300,
          title: 'Bottom Size 300'
        },
        {
          position: 'left',
          size: 200,
          title: 'Left Size 200'
        },
        {
          position: 'right',
          size: 200,
          title: 'Right Size 200'
        }
      ]
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
    handle(option) {
      new this.$SugarPopup({
        template: this.getTemplate(option.position)
      }, {}, {
          props: option
        });
    },
    generateColor() {
      return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
    },
    getTemplate(position) {
      switch (position) {
        case "center":
          return `
            <div class="demo-popup-center-wrap" >
              <sugar-page-content style="background-color:${this.generateColor()}">
                <sugar-nav-bar slot="nav" style="background-color: transparent;">
                  <button slot="left" @click="$emit('popup-close')" style="color:#fff">
                    <i class="sugaric-close"></i>
                  </button>
                </sugar-nav-bar>
              </sugar-page-content>
            </div>
          `
        default:
          return `
          <sugar-page-content style="background-color:${this.generateColor()}">
            <sugar-nav-bar slot="nav" style="background-color: transparent;">
              <button slot="left" @click="$emit('popup-close')" style="color:#fff">
                <i class="sugaric-close"></i>
              </button>
            </sugar-nav-bar>
          </sugar-page-content>
        `
      }
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
<style lang="scss" >
.demo-popup-center-wrap {
  width: 80%;
  height: 200px;
  position: relative;
  border-radius: 2px;
}
</style>
