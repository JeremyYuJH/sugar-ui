<template>
    <div class="sugar-radio-group sugar-display-flex" :class="dynamicClass">
        <slot></slot>
    </div>
</template>
<script>
const radioName = Date.now();
export default {
    name: "sugar-radio-group",
    props: {
        value: {
            type: [String, Number],
            default() {
                return undefined
            }
        },
        horizontal:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    computed: {
        radioList() {
            return this.$children || []
        },
        dynamicClass(){
            return{
                "sugar-flex-direction-row":this.horizontal,
                "sugar-flex-direction-column":!this.horizontal,
                "sugar-radio-group-small":this.size === "small"
            }
        }
    },
    methods: {
        change(value) {
            this.$emit("input", value);
        },
        getRadioName() {
            return radioName;
        }
    }
}
</script>
