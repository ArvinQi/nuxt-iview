<template>
  <div class="root">
    <nuxt/>
  </div>
</template>

<script>

export default {
  watch: {
    $route: 'setStore'
  },
  computed: {
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.App {
  &--hidden {
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
  }
}

.root {
  height: 100%;
  width: 100%;
  position: fixed;
}
</style>
