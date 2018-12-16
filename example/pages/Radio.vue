<template>
    <div>{{value}}
        <sugar-radio-group v-model="value">
            <sugar-radio value="1">
                JAVASCRIPT
            </sugar-radio>
            <sugar-radio value="2" disabled>
                HTML
            </sugar-radio>
            <sugar-radio value="3" >
                CSS
            </sugar-radio>
        </sugar-radio-group>
        <sugar-radio-group v-model="value" horizontal>
            <sugar-radio value="1">
                JAVASCRIPT
            </sugar-radio>
            <sugar-radio value="2">
                HTML
            </sugar-radio>
            <sugar-radio value="3" disabled>
                CSS
            </sugar-radio>
        </sugar-radio-group>
    </div>
</template>
<script>
export default {
    components: {

    },
    data() {
        return {
            value:"3"
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

    },
    watch: {

    },
    directives: {

    }
}
</script>
