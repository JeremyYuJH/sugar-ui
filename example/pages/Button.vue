<template>
  <sugar-page-content :light="true">
    <sugar-nav-bar slot="nav">
      Button
    </sugar-nav-bar>

    <sugar-group-list>
      <sugar-group-item :data="theme" :autoIteration="false">
        <section class="example-title" slot="group-bar">
          Block + Theme
        </section>
        <sugar-grid :col="1" vertical="10px" :square="false" slot="group-item" slot-scope="param" class="padding-5">
          <sugar-grid-item class="item" v-for="(item,index) in param.rows" :key="index">
            <sugar-button block :theme="item">{{item}}</sugar-button>
          </sugar-grid-item>
        </sugar-grid>
      </sugar-group-item>
      <sugar-group-item :data="theme" :autoIteration="false">
        <section class="example-title" slot="group-bar">
          Block + Light + Theme
        </section>
        <sugar-grid :col="1" vertical="10px" :square="false" slot="group-item" slot-scope="param" class="padding-5">
          <sugar-grid-item class="item" v-for="(item,index) in param.rows" :key="index">
            <sugar-button block light :theme="item">{{item}}</sugar-button>
          </sugar-grid-item>
        </sugar-grid>
      </sugar-group-item>
      <sugar-group-item :data="theme" :autoIteration="false">
        <section class="example-title" slot="group-bar">
          Block + Light + Theme
        </section>
        <sugar-grid :col="1" vertical="10px" :square="false" slot="group-item" slot-scope="param" class="padding-5">
          <sugar-grid-item class="item" v-for="(item,index) in param.rows" :key="index">
            <sugar-button block light :theme="item">{{item}}</sugar-button>
          </sugar-grid-item>
        </sugar-grid>
      </sugar-group-item>
      <sugar-group-item :data="theme" :autoIteration="false">
        <section class="example-title" slot="group-bar">
          Inline + Theme
        </section>
        <sugar-grid spacing="small" vertical="5px" :square="false" slot="group-item" slot-scope="param" class="padding-5">
          <sugar-grid-item class="item" v-for="(item,index) in param.rows" :key="index">
            <sugar-button :theme="item">{{item}}</sugar-button>
          </sugar-grid-item>
        </sugar-grid>
      </sugar-group-item>
      <sugar-group-item :data="theme" :autoIteration="false">
        <section class="example-title" slot="group-bar">
          Inline + Light + Theme
        </section>
        <sugar-grid spacing="small" vertical="5px" :square="false" slot="group-item" slot-scope="param" class="padding-5">
          <sugar-grid-item class="item" v-for="(item,index) in param.rows" :key="index">
            <sugar-button light :theme="item">{{item}}</sugar-button>
          </sugar-grid-item>
        </sugar-grid>
      </sugar-group-item>
      <sugar-group-item :autoIteration="false">
        <section class="example-title" slot="group-bar">
          Custom
        </section>
        <div slot="group-item">
          <sugar-cell :isArrow="false">
            Block
            <span slot="value">
              <sugar-switch v-model="option.block"></sugar-switch>
            </span>
          </sugar-cell>
          <sugar-cell :isArrow="false">
            Light
            <span slot="value">
              <sugar-switch v-model="option.light"></sugar-switch>
            </span>
          </sugar-cell>
          <sugar-cell :isArrow="false">
            Round
            <span slot="value">
              <sugar-switch v-model="option.round"></sugar-switch>
            </span>
          </sugar-cell>
          <sugar-cell :isArrow="false">
            Disabled
            <span slot="value">
              <sugar-switch v-model="option.disabled"></sugar-switch>
            </span>
          </sugar-cell>
          <sugar-cell :isArrow="false">
            Waiting
            <span slot="value">
              <sugar-switch v-model="option.waiting"></sugar-switch>
            </span>
          </sugar-cell>
          <sugar-cell @click="choose('theme')">
            Theme
            <span slot="value">
              {{option.theme}}
            </span>
          </sugar-cell>
          <sugar-cell @click="choose('size')">
            Size
            <span slot="value">
              {{option.size}}
            </span>
          </sugar-cell>
          <div class="padding-5">
            <sugar-button :block="option.block" :round="option.round" :disabled="option.disabled" :waiting="option.waiting" :light="option.light" :theme="option.theme" :size="option.size">Custom</sugar-button>
          </div>
        </div>
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
      theme: [
        'default',
        'primary',
        'green',
        'orange',
        'red'
      ],
      size: [
        'default',
        'small',
        'big'
      ],
      option: {
        block: true,
        light: true,
        round: false,
        disabled: false,
        waiting: false,
        theme: 'default',
        size: 'default'
      }
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
    choose(type) {
      new this.$SugarPicker({
        data: this[type],
        value: this.option[type],
        onSelected: (value, row) => {
          this.option[type] = value;
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
