<template>
  <div class="hello">
    <p @click="addCount">
      {{ text }} {{ count }}
    </p>
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/course">
      Course
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
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
  }
}
</script>

<style lang="scss">
  .hello {
    color: red;
  }
</style>