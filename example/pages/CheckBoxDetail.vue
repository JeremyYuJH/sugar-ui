<template>
  <sugar-page-content contantClass="example-bg-white">
    <sugar-nav-bar slot="nav" style="background-color:rgb(247, 247, 247)">
      {{title}}
      <button slot="left" @click="$emit('popup-close')">
        <i class="sugaric-back"></i>
      </button>
    </sugar-nav-bar>
    <sugar-checkbox-group v-model="val">
      <sugar-checkbox v-for="item in data" :key="item.value" :disabled="item.disabled" :value="item.value">{{item.text}}</sugar-checkbox>
    </sugar-checkbox-group>
  </sugar-page-content>
</template>
<script>
export default {
  components: {

  },
  props: {
    data: {
      type: Array,
    },
    value: {
      type: Array
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      val: []
    }
  },
  computed: {

  },
  created: function () {
    this.val = [].concat(this.value)
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
    val(newVal) {
      this.$emit('change', newVal)
    }
  },
  directives: {

  }
}
</script>
