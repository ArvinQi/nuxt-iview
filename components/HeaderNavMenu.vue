<template>
  <ul class="Menu">
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/guide">
        <span class="iconfont icon-date"></span>
      </nuxt-link>
    </li>
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/alert">
        <span class="iconfont icon-alert"></span>
      </nuxt-link>
    </li>
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/setting">
        <span class="iconfont icon-setting"></span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import NuxtHeaderNavMenuDropdown from '~/components/HeaderNavMenuDropdown.vue'

export default {
  components: {
    NuxtHeaderNavMenuDropdown
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/core.scss';
.Menu
{
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: flex-end;
  @media (min-width: 991px)
  {
    width: 200px;
    align-self: flex-end;
    flex-wrap: nowrap;
    padding-left: 15px;
    justify-content: flex-end;
  }
  &__Item
  {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #dbdfe1;
    @media (min-width: 991px)
    {
      border-bottom: none;
    }
    &:last-child
    {
      border-bottom: none;
    }
    &__Link
    {
      height: 60px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      color: $text-color;
      text-decoration: none;
      letter-spacing: 0.5px;
      &:hover
      {
        color: $primary-color;
      }
      span{
        font-size: 18px;
      }
      @media (min-width: 991px)
      {
        height: 79px;
      }
    }
    .nuxt-link-active, .nuxt-link-active:hover
    {
      color: #41b883;
    }
  }
}
</style>
