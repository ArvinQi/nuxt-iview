<template>
  <header class="Header">
    <left-nav />
    <nuxt-link class="Header__Logo" to="/">
      <img src="~static/logo.png" alt="Logo"/>
    </nuxt-link>
    <nuxt-header-nav/>
  </header>
</template>

<script>
import NuxtHeaderNav from '~/components/HeaderNav.vue'
import LeftNav from '~/components/Nav.vue'

export default {
  computed: {
    visible () { return this.$store.state.visibleHeader }
  },
  methods: {
    toggle () { this.$store.commit('toggle', 'visibleHeader') }
  },
  components: {
    LeftNav,
    NuxtHeaderNav
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/core.scss';
.Header
{
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 995;
  padding: 0;
  display: flex;
  position: fixed;
  flex-direction: row;
  background-color: $background-color-dark;
  border-bottom: 1px solid #dbdfe1;
  @media (min-width: 991px)
  {
    height: 80px;
  }
  &__Logo
  {
    display: flex;
    align-items: center;
    @media (min-width: 991px)
    {
      width: 180px;
      padding: 0 30px;
    }
  }
  &__Toggler
  {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    @media (min-width: 991px)
    {
      display: none;
    }
    &__Button
    {
      display: flex;
      width: 25px;
      height: 20px;
      cursor: pointer;
    }
  }
}
</style>
