<template>
    <div class="sugar-checkbox-group sugar-display-flex" :class="dynamicClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "sugar-checkbox-group",
    props: {
        value: {
            type: Array,
            default() {
                return []
            }
        },
        horizontal: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    data(){
        return{
            values:[]
        }
    },
    computed: {
        dynamicClass() {
            return {
                "sugar-flex-direction-row": this.horizontal,
                "sugar-flex-direction-column": !this.horizontal,
                "sugar-checkbox-group-small": this.size === "small"
            }
        }
    },
    methods: {
        change({value,checked}) {
            if(checked && !this.values.includes(value)){
                this.values.push(value)
            }else if(!checked){
                let i = this.values.findIndex((item)=>{
                    return item === value;
                })
                !!~i && this.values.splice(i,1);
            }
            this.$emit("input", this.values);
        }
    },
    watch: {
        "value": {
            handler(value) {
                this.values = [...value];
            },
            immediate: true
        }
    }
}
</script>
