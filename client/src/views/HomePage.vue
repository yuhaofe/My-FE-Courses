<template>
  <div class="page-home">
    Home
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