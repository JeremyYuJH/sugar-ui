<template>
  <sugar-page-content style="padding:0 2px 2px 2px">
    <sugar-nav-bar slot="nav">
      Grid
    </sugar-nav-bar>
    <section class="example-title">
      Col 2 - Vertical 10px - Spacing default
    </section>
    <sugar-grid :col="2" spacing="default" vertical="10px">
      <sugar-grid-item v-for="i in 10" :key="i" class="flex-box-center" style="text-align:center;color:#fff;background-color: #4472c4">{{i}}</sugar-grid-item>
    </sugar-grid>
    <section class="example-title">
      Col 3 - Vertical 5px - Spacing small
    </section>
    <sugar-grid :col="3" spacing="small" vertical="5px">
      <sugar-grid-item v-for="i in 10" :key="i" class="flex-box-center" style="text-align:center;color:#fff;background-color: #4472c4">{{i}}</sugar-grid-item>
    </sugar-grid>
    <section class="example-title">
      Col 4 - Vertical 5px - Spacing small
    </section>
    <sugar-grid :col="4" spacing="small" vertical="5px">
      <sugar-grid-item v-for="i in 10" :key="i" class="flex-box-center" style="text-align:center;color:#fff;background-color: #4472c4">{{i}}</sugar-grid-item>
    </sugar-grid>
    <section class="example-title">
      Col 4 - Vertical 1px - Spacing 1x
    </section>
    <sugar-grid :col="4" spacing="1x" vertical="1px">
      <sugar-grid-item v-for="i in 8" :key="i" class="flex-box-center" style="text-align:center;color:#fff;background-color: #4472c4">{{i}}</sugar-grid-item>
    </sugar-grid>
    <section class="example-title">
      Col 4 - Vertical 1px - Spacing 1x - Square false
    </section>
    <sugar-grid :col="4" spacing="1x" vertical="1px" :square="false">
      <sugar-grid-item v-for="i in 8" :key="i" class="flex-box-center" style="text-align:center;color:#fff;background-color: #4472c4">{{i}}</sugar-grid-item>
    </sugar-grid>
    <section class="example-title">
      Col 3 - Vertical 1px - Spacing 1x - Square false
    </section>
    <sugar-grid :col="3" spacing="1x" vertical="1px" :square="false">
      <sugar-grid-item v-for="i in 8" :key="i" class="flex-box-center" style="text-align:center;color:#fff;background-color: #4472c4">{{i}}</sugar-grid-item>
    </sugar-grid>
    <section class="example-title">
      Col 2 - Vertical 1px - Spacing 1x - Square false
    </section>
    <sugar-grid :col="2" spacing="1x" vertical="1px" :square="false">
      <sugar-grid-item v-for="i in 8" :key="i" class="flex-box-center" style="text-align:center;color:#fff;background-color: #4472c4">{{i}}</sugar-grid-item>
    </sugar-grid>
  </sugar-page-content>
</template>
<script>
export default {
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
