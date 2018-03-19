<template>
  <sugar-page-content>
    <sugar-nav-bar slot="nav">
      GroupList
    </sugar-nav-bar>
    <sugar-group-list>
      <sugar-group-item v-for="(item,index) in items" :key="index" :data="item.data" :nav="item.title">
        <section slot="group-bar" class="demo-group-bar flex-box align-center">
          {{item.title}}
        </section>
        <li slot="group-item" slot-scope="param">
          <sugar-button block light style="margin: 2px;width:calc(100% - 6px)">{{param.row}}</sugar-button>
        </li>
      </sugar-group-item>
    </sugar-group-list>
  </sugar-page-content>

</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      items: []
    }
  },
  computed: {

  },
  created: function () {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        title: `${i}title`,
        data: this.random()
      });
    }
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
    random() {
      let random = Math.round(Math.random() * 10) + 1;
      let data = [];
      for (let i = 0; i < random; i++) {
        data.push(i);
      }
      return data;
    }
  },
  watch: {

  },
  directives: {

  }
}
</script>
