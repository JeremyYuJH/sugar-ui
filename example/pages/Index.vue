<template>
  <sugar-page-content>
    <div class="title flex-box-center">SUGAR UI</div>
    <div class="go flex-box-center">
      <router-link class=" sugaric-arrow" to="/components"></router-link>
    </div>
  </sugar-page-content>
</template>
<script>
import componentList from '../assets/components.json'
export default {
  components: {

  },
  data() {
    return {
      componentList
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
<style lang="scss" scoped>
@import "~@/style/variables/variables.scss";
@import "~@/style/mixin/mixin.scss";
@import "~@/style/tool/tool.scss";
.title {
  color: $color-sugar;
  font-size: 30px;
  height: 200px;
}
.go {
  position: absolute;
  bottom: 0;
  height: 200px;
  width: 100%;
  font-size: 20px;
  a {
    color: $sugar-color-gray-light;
    padding: 20px;
  }
}
</style>
