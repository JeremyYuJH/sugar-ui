<template>
  <sugar-page-content>
    <sugar-nav-bar slot="nav">
      Radio
    </sugar-nav-bar>
    <sugar-cell style="margin:10px 0" :isArrow="false">
      Default
      <span slot="value">
        {{chooseText1}}
      </span>
    </sugar-cell>
    <sugar-radio-group v-model="value1">
      <sugar-radio v-for="item in data1" :key="item.value" :disabled="item.disabled" :value="item.value">{{item.text}}</sugar-radio>
    </sugar-radio-group>
    <sugar-cell style="margin:10px 0" :isArrow="false">
      Default Selected
      <span slot="value">
        {{chooseText2}}
      </span>
    </sugar-cell>
    <sugar-radio-group v-model="value2">
      <sugar-radio v-for="item in data1" :key="item.value" :disabled="item.disabled" :value="item.value">{{item.text}}</sugar-radio>
    </sugar-radio-group>
    <sugar-cell style="margin:10px 0" :isArrow="false">
      Disabled
      <span slot="value">
        {{chooseText3}}
      </span>
    </sugar-cell>
    <sugar-radio-group v-model="value3">
      <sugar-radio v-for="item in data2" :key="item.value" :disabled="item.disabled" :value="item.value">{{item.text}}</sugar-radio>
    </sugar-radio-group>
    <sugar-cell style="margin:10px 0" :isArrow="false">
      Horizontal
      <span slot="value">
        {{chooseText4}}
      </span>
    </sugar-cell>
    <sugar-radio-group v-model="value4" :horizontal="true">
      <sugar-radio v-for="item in data2" :key="item.value" :disabled="item.disabled" :value="item.value">{{item.text}}</sugar-radio>
    </sugar-radio-group>
  </sugar-page-content>
</template>
<script>
import data1 from '../assets/data1.json'
import data2 from '../assets/data2.json'
export default {
  components: {

  },
  props: {
    value: String
  },
  data() {
    return {
      value1: undefined,
      value2: 1,
      value3: undefined,
      value4: 2,
      data1,
      data2
    }
  },
  computed: {
    chooseText1() {
      return this.getText('value1');
    },
    chooseText2() {
      return this.getText('value2');
    },
    chooseText3() {
      return this.getText('value3');
    },
    chooseText4() {
      return this.getText('value4');
    }
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
    getText(val) {
      let i = this.data1.findIndex((item) => {
        return item.value === this[val]
      })
      return ~i ? this.data1[i].text : '';
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
