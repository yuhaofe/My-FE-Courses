<template>
  <BaseTag
    :name="name"
    :color="color"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
  },
  computed: {
    color() {
      const tagColors = {
        'JavaScript': '#c9b518',
        '类型': '#c9b518',
        '闭包': '#c9b518',
        '原型': '#c9b518',
        '异步': '#c9b518',
        'CSS': '#0099ff'
      }
      const color = tagColors[this.name]
      return color ? color : '#000000'
    }
  },
}
</script>

<style lang="scss">

</style>