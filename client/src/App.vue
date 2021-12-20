<template>
  <div class="hello">
    {{ text }}
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