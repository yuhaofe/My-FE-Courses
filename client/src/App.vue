<template>
  <div class="hello">
    <p>{{ text }}</p>
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
  }
}
</script>

<style lang="scss">
  .hello {
    color: red;
  }
</style>