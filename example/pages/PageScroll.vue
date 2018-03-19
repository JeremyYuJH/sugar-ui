<template>
  <sugar-page-content>
    <sugar-nav-bar slot="nav">
      Scroll
    </sugar-nav-bar>
    <sugar-scroll @pull-down="pullDown">
      <sugar-grid :col="3" spacing="default" vertical="10px">
        <sugar-grid-item v-for="i in count" :key="i" class="flex-box-center" style="text-align:center;color:#fff;background-color: #4472c4">{{i}}</sugar-grid-item>
      </sugar-grid>
    </sugar-scroll>
  </sugar-page-content>

</template>
<script>
class EventEmitter {
  constructor() {
    this.onList = [];
  }
  on(name, fn) {
    this.onList.push({
      name,
      fn
    });
  }
  emit(name, ...param) {
    this.onList.map((o) => {
      if (o.name === name) {
        o.fn(...param);
      }
    })
  }
  off(name, fn) {
    let i = this.onList.findIndex((value) => {
      return value.name == name;
    })
    if (~i && fn == this.onList[i].fn) {
      this.onList.shift(i, 1);
    }
  }
}
export default {
  components: {

  },
  data() {
    return {
      count: 30
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
    pullDown(done) {
      debugger
      setTimeout(() => {
        done()
      }, 1800)
    },
    push() {
      this.count += 5;
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
