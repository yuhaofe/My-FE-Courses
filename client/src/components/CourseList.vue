<template>
  <div class="course-list">
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <CourseCard />
  </div>
</template>

<script>
import CourseCard from './CourseCard'

export default {
  components: {
    CourseCard
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