<template>
    <div>{{value}}
        <sugar-checkbox-group v-model="value">
            <sugar-checkbox value="1">HTML</sugar-checkbox>
            <sugar-checkbox value="2">CSS</sugar-checkbox>
            <sugar-checkbox value="3" disabled>JAVASCRIPT</sugar-checkbox>
        </sugar-checkbox-group>
        <sugar-checkbox-group v-model="value" horizontal>
            <sugar-checkbox value="1">HTML</sugar-checkbox>
            <sugar-checkbox value="2">CSS</sugar-checkbox>
            <sugar-checkbox value="3" disabled>JAVASCRIPT</sugar-checkbox>
        </sugar-checkbox-group>
    </div>
</template>
<script>
export default {
    components: {

    },
    data() {
        return {
            value: []
        }
    },
    computed: {

    },
    created: function () {
        setTimeout(()=>{
            this.value = ["1","3"]
        },1000)
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

    },
    watch: {

    },
    directives: {

    }
}
</script>
