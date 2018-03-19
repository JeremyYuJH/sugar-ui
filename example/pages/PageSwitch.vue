<template>
  <sugar-page-content style="padding:10px 0">
    <sugar-nav-bar slot="nav">
      Switch
    </sugar-nav-bar>
    <section class="example-title">
      Default
    </section>
    <sugar-cell :isArrow="false">
      <sugar-switch></sugar-switch>
    </sugar-cell>
    <section class="example-title">
      Disabled
    </section>
    <sugar-cell :isArrow="false">
      <sugar-switch :disabled="true"></sugar-switch>
    </sugar-cell>
    <section class="example-title">
      Selected
    </section>
    <sugar-cell :isArrow="false">
      <sugar-switch :value="true"></sugar-switch>
    </sugar-cell>
    <section class="example-title">
      Selected - Disabled
    </section>
    <sugar-cell :isArrow="false">
      <sugar-switch :disabled="true" :value="true"></sugar-switch>
    </sugar-cell>
  </sugar-page-content>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      val: true
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
