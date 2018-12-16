<template>
    <div class="sugar-checkbox sugar-display-flex sugar-align-center" :class="dynamicClass">
        <input type="checkbox" :value="value" :disabled="disabled" @change="change">
        <div class="sugar-checkbox-mark"></div>
        <div class="sugar-checkbox-label">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { mixinProps } from "@sugarSrc/components/mixin.js";
export default {
    name: "sugar-checkbox",
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

        }
    },
    computed: {
        checked(){
            return this.$parent.values.includes(this.value);
        },
        dynamicClass(){
            return {
                "sugar-checkbox-checked":this.checked,
                "sugar-checkbox-disabled":this.disabled
            }
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
        change(e) {
            try {
                this.$parent.change({
                    value:this.value,
                    checked:e.target.checked
                });
            } catch (error) {
                console.error(error)
            }
        }
    },
    watch: {

    },
    directives: {

    }
}
</script>
<style lang="scss">
@import "./checkbox.scss";
</style>