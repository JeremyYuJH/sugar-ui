export default ["button","radio","checkbox"].map((item) => {
    return {
        "path": `/${item}`,
        component: () => import(`./pages/${item.replace(/^\S/, function (s) { return s.toUpperCase() })}.vue`)
    }
})