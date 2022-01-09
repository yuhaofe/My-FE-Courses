<template>
  <div class="base-search-bar">
    <input
      v-model="searchKey"
      type="search"
      placeholder="搜索"
      @search.prevent="search"
    >
  </div>
</template>

<script>
export default {
  props: {
    routePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchKey: ''
    }
  },
  methods: {
    search() {
      this.$router.push(this.routePath + '/' + encodeURIComponent(this.searchKey))
    }
  }
}
</script>

<style lang="scss">
.base-search-bar {

  input {
    border: 2px solid #6DB9E3;
    height: 40px;
    width: 100%;
    border-radius: 20px;
    padding: 0 20px;

    &:focus {
      outline: none;
    }
  }
}
</style>