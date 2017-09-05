<template>
    <div class="left-nav">
        left
    </div>
</template>

<script>

export default {
    computed: {
        visible() { return this.$store.state.visibleHeader }
    },
    methods: {
        toggle() { this.$store.commit('toggle', 'visibleHeader') }
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>
.left-nav {
    // position: fixed;
    min-width: 100px;
    height: 100vh;
}
</style>
