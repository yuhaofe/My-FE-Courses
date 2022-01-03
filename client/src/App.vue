<template>
  <div>
    <router-view />
    <TabBar />
  </div>
</template>

<script>
import TabBar from './components/TabBar'

export default {
  components: { TabBar },
  data: function() {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
}
</script>

<style lang="scss">
  body {
    max-width: 600px;
    height: 100%;
    margin: 0px auto;
    background-color: #f4f4f4;
  }

  * {
    box-sizing: border-box;
  }
</style>