<template>
  <div class="page-wrapper">
    <div class="page-home">
      Home
      <BaseGrid :col="5">
        <BaseGridItem
          icon="javascript"
          text="JS"
          to="/tag/javascript"
        />
        <BaseGridItem
          icon="css"
          text="CSS"
          to="/tag/css"
        />
        <BaseGridItem
          icon="react"
          text="React"
          to="/tag/react"
        />
        <BaseGridItem
          icon="vue"
          text="Vue"
          to="/tag/vue"
        />
        <BaseGridItem
          icon="network"
          text="网络"
          to="/tag/网络"
        />
      </BaseGrid>
      <CourseList :courses="courses" />
    </div>
  </div>
</template>

<script>
import CourseList from '../components/CourseList'

export default {
  components: {
    CourseList
  },
  computed: {
    courses() {
      return this.$store.state.courses.courses
    }
  },
  created() {
    this.$store.dispatch('courses/fetchCourses')
  }
}
</script>

<style lang="scss">
.page-home {
  padding-bottom: 80px;
}
</style>