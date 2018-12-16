<template>
    <div class="sugar-radio sugar-display-flex sugar-align-center" :class="dynamicClass">
        <input type="radio" :value="value" :disabled="disabled" :name="name" @change="change" >
        <div class="sugar-radio-mark"></div>
        <div class="sugar-radio-label">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { mixinProps } from '@sugarSrc/components/mixin.js'
export default {
    name: "sugar-radio",
    mixins: [mixinProps],
    props: {
        value: {
            type: [String, Number],
            default() {
                return undefined
            }
        }
    },
    data() {
        return {
            name: ""
        }
    },
    computed:{
        checked(){
            return !!this.value &&  this.$parent.value === this.value;
        },
        dynamicClass(){
            return {
                "sugar-radio-checked":this.checked,
                "sugar-radio-disabled":this.disabled
            }
        }
    },
    created: function () {
        this.init();
    },
    methods: {
        init() {
            try {
                this.name = this.$parent.getRadioName()
            } catch (error) {
                console.error(error)
            }
        },
        change() {
            try {
                this.$parent.change(this.value);
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>
<style lang="scss">
@import "./radio.scss";
</style>