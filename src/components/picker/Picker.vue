<template>
  <div class="sugar-picker-warp">
    <section class="sugar-picker-action-bar">
      <a picker-action="cancel" @click="cancel">取消</a>
      <a picker-action="ok" @click="ok">确认</a>
      <span class=""></span>
    </section>
    <section class="sugar-picker-contant">
      <span class="sugar-picker-mask sugar-picker-mask-top"></span>
      <span class="sugar-picker-mask sugar-picker-mask-bottom"></span>
      <div class="picker-scroll-warp" ref="picker-scroll-wrapper">
        <div>
          <ul class="wheel-scroll">
            <li v-for="(item,index) in list" class="wheel-item" :key="index" v-text="item[dataText]"></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  components: {

  },
  props: {
    data: {
      type: Array,
      default: []
    },
    value: {
      type: [String, Number],
      default: ''
    },
    dataKey: {
      type: String,
      default: "value"
    },
    dataText: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      list: []
    }
  },
  computed: {
    selectedIndex() {
      let i = this.list.findIndex((value) => {
        return this.value == value[this.dataKey];
      })
      return !!~i ? i : 0;
    }
  },
  created: function () {
    this.generateData();
  },
  beforeMount: function () {

  },
  mounted: function () {
    this.init();
  },
  beforeDestroy: function () {

  },
  destroyed: function () {

  },
  methods: {
    init() {
      this.scrollInstance = new BScroll(this.$refs['picker-scroll-wrapper'].children[0], {
        wheel: {
          selectedIndex: this.selectedIndex
        }
      });
    },
    generateData() {
      this.list = this.data.map((item) => {
        return typeof item === 'string' ? { "text": item, "value": item } : item
      })
    },
    ok() {
      let selectedIndex = this.scrollInstance.getSelectedIndex();
      this.$emit('onSelected', this.list[selectedIndex][this.dataKey], this.list[selectedIndex]);
      this.$emit('popup-close');
    },
    cancel() {
      this.$emit('popup-close');
    }
  },
  beforeDestroy() {
    this.scrollInstance.destroy();
  },
  watch: {

  },
  directives: {

  }
}
</script>
<style lang="scss">
@import "./picker.scss";
</style>

