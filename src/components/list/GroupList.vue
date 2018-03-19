<template>
  <div class="sugar-list-warp">
    <sugar-scroll ref="scroll" @on-scroll="onScroll">
      <slot></slot>
    </sugar-scroll>
    <div class="sugar-item-active" ref="sugar-item-active" :style="itemActiveStyle" v-show="y < 0 && ~activeItemIndex"></div>
    <div class="sugar-list-nav-warp">
      <ul>
        <li v-for="(n,i) in navList" :key="i" @touchstart="scrollTo(n.index)" @touchmove.stop.prevent="onShortcutTouchMove">
          {{n.chart}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Scroll from '../scroll/Scroll.vue';
export default {
  name: 'sugar-group-list',
  components: {
    'sugar-scroll': Scroll
  },
  props: {
    isNav: {
      type: Boolean,
      default: false
    },
    isInit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      groupBarHeight: 0,
      groupItemHeight: 0,
      y: 0,
      totalHeight: 0,
      diffHeight: 0,
      listItem: [],
      navList: [],
      itemActiveStyle: {
        'transform': 'translate3d(0,0,0)',
        '-webkit-transform': 'translate3d(0,0,0)'
      }
    }
  },
  computed: {
    activeItemIndex() {
      return this.listItem.findIndex((value) => {
        return Math.abs(this.y) >= (value.startFixed + this.diffHeight) && Math.abs(this.y) <= (value.endFixed + this.diffHeight);
      })
    }
  },
  created: function () {

  },
  beforeMount: function () {

  },
  mounted: function () {
    !!this.isInit && this.init();
  },
  beforeDestroy: function () {

  },
  destroyed: function () {

  },
  methods: {
    scrollTo(index) {
      this.$refs['scroll'].scrollToElement(this.$children[0].$children[index].$el, 260);
    },
    onShortcutTouchMove(e) {
      let firstTouch = e.touches[0]
    },
    init() {
      let itemEl = this.$children[0].$el.querySelectorAll('.sugar-list-item-warp')
      if (!itemEl || itemEl.length < 1) {
        return;
      }
      this.groupBarHeight = itemEl[0].querySelector('.sugar-list-group-bar').offsetHeight;
      let selfHeight = 0;
      for (let i = 0; i < itemEl.length; i++) {
        selfHeight = itemEl[i].querySelector('.sugar-list-item').offsetHeight;
        this.listItem.push({
          startFixed: this.totalHeight,
          endFixed: this.totalHeight + selfHeight
        })
        this.totalHeight += selfHeight;
      }
      this.diffHeight = this.$el.querySelector('.sugar-scroll-wrap').children[0].offsetHeight - this.totalHeight;
      if (this.isNav) {
        this.$children[0].$children.map((item, index) => {
          if (!!item.nav && item.nav.length > 0) {
            this.navList.push({
              chart: item.nav.charAt(0),
              index
            });
          }
        })
      }
    },
    refresh() {
      this.init();
      this.$refs['scroll'].refresh();
    },
    onScroll(pos) {
      this.y = pos.y;
      let i = this.listItem.findIndex((value) => {
        return Math.abs(this.y) >= (value.startFixed - this.groupBarHeight + this.diffHeight) && Math.abs(this.y) <= (value.startFixed + this.diffHeight);
      })
      if (~i) {
        let n = -(this.groupBarHeight - (this.listItem[i].startFixed - Math.abs(this.y) + this.diffHeight));
        this.itemActiveStyle['transform'] = `translate3d(0,${n}px,0)`;
        this.itemActiveStyle['-webkit-transform'] = `translate3d(0,${n}px,0)`
      } else {
        this.itemActiveStyle['transform'] = `translate3d(0,0,0)`;
        this.itemActiveStyle['-webkit-transform'] = `translate3d(0,0,0)`
      }
    }
  },
  watch: {
    activeItemIndex(val) {
      let listItems = this.$children[0].$el.querySelectorAll('.sugar-list-item-warp');

      if (listItems.length > val && !!~val) {
        this.$refs['sugar-item-active'].innerHTML = listItems[val].querySelector('.sugar-list-item').querySelector('.sugar-list-group-bar').cloneNode(true).outerHTML      }
    }
  },
  directives: {

  }
}
</script>
<style lang="scss">
@import "./list.scss";
</style>
