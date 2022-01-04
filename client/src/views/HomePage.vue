<template>
  <div class="page-home">
    Home
    <BaseGrid col="5">
      <BaseGridItem
        icon="javascript"
        text="JS"
      />
      <BaseGridItem
        icon="css"
        text="CSS"
      />
      <BaseGridItem
        icon="react"
        text="React"
      />
      <BaseGridItem
        icon="vue"
        text="Vue"
      />
      <BaseGridItem
        icon="network"
        text="网络"
      />
    </BaseGrid>
    <CourseList />
  </div>
</template>

<script>
import CourseList from '../components/CourseList'

export default {
  components: {
    CourseList
  }
}
</script>

<style lang="scss">
.page-home {
  padding-bottom: 80px;
}
</style>