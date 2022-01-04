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
  props: {
    courses: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.course-list {
  margin: 0px 10px;
  
  > *:not(:first-child) {
    margin-top: 10px;
  }
}
</style>