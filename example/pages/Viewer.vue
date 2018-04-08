<template>
  <div>
    <img ref="img" src="../assets/logo.png" alt="">
  </div>
</template>
<script>
import Alloyfinger from 'alloyfinger'
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
    let af = new Alloyfinger(this.$refs['img'], {
      touchStart: function () { },
      touchMove: function () { },
      touchEnd: function () { },
      touchCancel: function () { },
      multipointStart: function () { },
      multipointEnd: function () { },
      tap: function () { },
      doubleTap: function (evt) {
        debugger
        console.log(evt);
      },
      longTap: function () { },
      singleTap: function () { },
      rotate: function (evt) {
        console.log(evt.angle);
      },
      pinch: function (evt) {
        console.log(evt.zoom);
      },
      pressMove: function (evt) {
        console.log(evt.deltaX);
        console.log(evt.deltaY);
      },
      swipe: function (evt) {
        console.log("swipe" + evt.direction);
      }
    });
    console.log(af);
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
