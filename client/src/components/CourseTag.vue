<template>
  <span
    class="course-tag"
    :style="style"
  >{{ name }}</span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    style: function() {
      return `
      color: ${this.color};
      border-color: ${this.color};
      `
    }
  }
}
</script>

<style lang="scss">
.course-tag {
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  width: fit-content;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 6px;
}
</style>