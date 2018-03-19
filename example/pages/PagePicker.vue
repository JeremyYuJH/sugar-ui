<template>
  <sugar-page-content>
    <sugar-nav-bar slot="nav">
      Picker
    </sugar-nav-bar>
    <div class="sugar-content-block-inner">
      <sugar-cell @click="open('value2')">
        Default
        <span slot="value">
          {{value.text}}
        </span>
      </sugar-cell>
    </div>
  </sugar-page-content>
</template>
<script>
import data1 from '../assets/data1.json'
export default {
  components: {

  },
  data() {
    return {
      value: ''
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
    open() {
      new this.$SugarPicker({
        data: data1,
        value: this.value.value,
        onSelected: (value, row) => {
          this.value = { ...row };
        }
      });
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
