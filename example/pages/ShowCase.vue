<template>
  <sugar-page-content :light="true">
    <sugar-nav-bar slot="nav">
      Show Case
    </sugar-nav-bar>
    <sugar-group-list>
      <sugar-group-item v-for="component in componentList" :key="component.title" :data="component.list" :autoIteration="false">
        <section slot="group-bar" class="demo-group-bar flex-box align-center">
          {{component.title}}
        </section>
        <sugar-grid :col="3" spacing="1x" vertical="1px" slot="group-item" slot-scope="param" class="padding-5">
          <sugar-grid-item @click.native="$router.push(row.path)" v-for="row in param.rows" :key="row.title" class="item flex-box-center">
            {{row.title}}
          </sugar-grid-item>
        </sugar-grid>
      </sugar-group-item>
    </sugar-group-list>
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
.item {
  background-color: $color-sugar;
  color: #fff;
}
</style>
