<template>
    <button class="sugar-button" :class="styleClass">
        <slot></slot>
    </button>
</template>
<script>
import { mixinProps } from '@sugarSrc/components/mixin.js'
export default {
    name: "sugar-button",
    mixins: [mixinProps],
    props: {
        block: {
            type: Boolean,
            default() {
                return false
            }
        },
        light: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    computed: {
        styleClass() {
            let styleClassArray = [
                `sugar-button-size-${this.size}`,
                `sugar-button-${this.light ? "light-" : ""}theme-${this.theme}`
            ];
            this.block && styleClassArray.push("sugar-button-block");
            this.light && styleClassArray.push("sugar-button-light");
            return styleClassArray.join(" ")
        }
    }
}
</script>
<style lang="scss">
@import "./button.scss";
</style>
