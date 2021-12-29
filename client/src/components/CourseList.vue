<template>
  <div class="course-list">
    <CourseCard
      v-for="course in courses"
      :key="course.id"
      :course="course"
    />
  </div>
</template>

<script>
import CourseCard from './CourseCard'

export default {
  components: {
    CourseCard
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
.course-list {
  margin: 0px 10px;
  
  > *:not(:first-child) {
    margin-top: 10px;
  }

  > :last-child {
    margin-bottom: 80px;
  }
}
</style>