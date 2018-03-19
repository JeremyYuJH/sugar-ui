<template>
  <sugar-page-content>
    <sugar-nav-bar slot="nav">
      CheckBox
    </sugar-nav-bar>

    <sugar-cell @click="handle('value2')">
      Default
      <span slot="value">
        {{chooseText2}}
      </span>
    </sugar-cell>
    <sugar-cell @click="handle('value1')" style="margin-top:10px">
      Default Selected
      <span slot="value">
        {{chooseText1}}
      </span>
    </sugar-cell>
    <sugar-cell style="margin-top:10px" :isArrow="false">
      Disabled
      <span slot="value">
        {{chooseText3}}
      </span>
    </sugar-cell>
    <sugar-checkbox-group v-model="value3" style="margin-top:10px">
      <sugar-checkbox v-for="item in data2" :key="item.value" :disabled="item.disabled" :value="item.value">{{item.text}}</sugar-checkbox>
    </sugar-checkbox-group>
    <sugar-cell style="margin:10px 0" :isArrow="false">
      Horizontal
      <span slot="value">
        {{chooseText4}}
      </span>
    </sugar-cell>
    <sugar-checkbox-group v-model="value4" :horizontal="true">
      <sugar-checkbox v-for="item in data1" :key="item.value" :disabled="item.disabled" :value="item.value">{{item.text}}</sugar-checkbox>
    </sugar-checkbox-group>
  </sugar-page-content>
</template>
<script>
import Detail from './PageCheckBoxDetail.vue'
import data1 from '../assets/data1.json'
import data2 from '../assets/data2.json'
export default {
  components: {

  },
  data() {
    return {
      value1: [0],
      value2: [],
      value3: [],
      value4: [],
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
    handle(value) {
      new this.$SugarPopup(Detail,
        {
          props: {
            data: this.data1,
            value: this[value]
          },
          on: {
            change: (res) => {
              this[value] = res;
            }
          }
        },
        {
          props: {
            position: 'left',
            size: 300
          }
        })
    },
    getText(val) {
      let text = [];
      this.data1.map((d) => {
        let i = this[val].findIndex((item) => {
          return item === d.value
        })
        !!~i && text.push(d.text);
      })
      return text.join(',');
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
