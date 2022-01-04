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
        'CSS': '#0099ff',
        'CSS Modules': '#0099ff',
        'CSS-in-JS': '#0099ff',
        'React': '#61dbfb',
        'React Hooks': '#61dbfb',
        'React Router': '#61dbfb',
        'Redux': '#61dbfb',
        'Vue': '#41b883',
        'Vue 2': '#41b883',
        'Vue 3': '#41b883',
        'Vue Router': '#41b883',
        'Vuex': '#41b883'
      }
      const color = tagColors[this.name]
      return color ? color : '#000000'
    }
  },
}
</script>

<style lang="scss">

</style>