<template>
  <div class="hello">
    <p @click="addCount">
      {{ text }} {{ count }}
    </p>
    <router-view />
    <NavBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  components: { NavBar },
  data: function() {
    return {
      text: 'Hello Vue!'
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    addCount() {
      this.$store.dispatch('increment')
    }
  },
}
</script>

<style lang="scss">
  body {
    max-width: 600px;
    height: 100%;
    margin: 0px auto;
  }
</style>