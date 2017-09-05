<template>
  <div class="search">
    <div class="input-field">
      <input class="Search__Input" type="text" name="search" id="algolia" :placeholder="$store.state.lang.text.search"/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <!-- <label>{{$store.state.lang.text.search}}</label> -->
    </div>
    <i-button class="btn-search" type="ghost" shape="circle">
      <span class="iconfont icon-search"></span>
    </i-button>
  </div>
</template>

<script>
let scriptInjected = false
let callbacks = []
let onScriptLoaded = (cb) => callbacks.push(cb)
let scriptLoaded = () => callbacks.forEach((cb) => cb())

export default {
  mounted() {
    onScriptLoaded(() => this.addInstantSearch())
    if (scriptInjected) return
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', '//cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js')
    document.getElementsByTagName('body')[0].appendChild(script)
    script.onload = scriptLoaded
    scriptInjected = true
  },
  methods: {
    addInstantSearch() {
      window.docsearch({
        apiKey: process.env.docSearchApiKey,
        indexName: 'nuxtjs',
        inputSelector: '#algolia',
        algoliaOptions: { 'facetFilters': [`tags:${this.$store.state.locale}`] },
        debug: true // Set debug to true if you want to inspect the dropdown
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: flex-start;
  width: 500px;
  height: 100%;
  position: relative;
  .input-field {
    width: 300px;
    margin-top: 16px;
  }
  .btn-search {
    padding: 0;
    margin-top: 24px;
    margin-left: 8px;
    width: 30px;
    height: 30px;
    color: #fff;
    border: 0;
    .iconfont {
      font-size: 20px;
    }
  }
}
</style>
