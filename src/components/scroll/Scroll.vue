<template>
  <div ref="wrapper" class="sugar-scroll-wrap">
    <div>
      <slot></slot>
    </div>
    <slot name="pulldown">
      <div class="sugar-pulldown-warp">
        <PullDownLoading v-if="pulldownState == 0"></PullDownLoading>
      </div>
    </slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import PullDownLoading from './PullDownLoading.vue'
export default {
  name: 'sugar-scroll',
  components: {
    PullDownLoading
  },
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    // scroll是否需要监听滚动事件
    listenScroll: {
      type: Boolean,
      default: false
    },
    pullup: {
      type: Boolean,
      default: false
    },
    pullDown: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      pulldownState: -1,
      option: {
        "observeDOM": true,
        "click": true,
        "probeType": 1,
        "scrollbar": { "fade": true },
        "pullUpLoad": {
          "threshold": 0,
          "txt": {
            "more": "Load more",
            "noMore": "No more data"
          }
        },
        "scrollY": true,
        "scrollX": false
      }
    }
  },
  mounted() {
    this.initScroll()
  },
  methods: {
    initScroll() {
      !!this.pullDown && (this.option = {
        ...this.option,
        "pullDownRefresh": {
          "threshold": 60,
          "stop": 40,
          "txt": "Refresh success"
        }
      })
      this.scroll = new BScroll(this.$refs.wrapper, this.option)

      // if (this.listenScroll) {
      this.scroll.on('scroll', pos => {
        this.$emit('on-scroll', pos);
      })
      // }

      !!this.pullDown && this.scroll.on('pullingDown', () => {
        this.pulldownState = 0;
        this.$emit('pull-down', () => {
          this.scroll.finishPullDown();
          this.pulldownState = -1;
        })
      })
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit('pull-up')
          }
        })
      }

      // if (this.beforeScroll) {
      // this.scroll.on('beforeScrollStart', () => {
      // console.log('beforeScroll');
      // this.$emit('beforeScroll')
      // })
      // }
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo(...param) {
      this.scroll && this.scroll.scrollTo(...param)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
  }
}
</script>
<style lang="scss">
@import "./scroll.scss";
</style>

