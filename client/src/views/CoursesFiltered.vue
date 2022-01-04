<template>
  <div class="page-wrapper">
    <div class="courses-filtered">
      <BaseNavBar
        :title="filter.tag.toUpperCase()"
        :show-back="true"
        :show-more="false"
        @on-click-back="navigateBack"
      />
      <template v-if="filteredCourses.loading">
        <div class="courses-filtered-loading">
          <span>加载中...</span>
        </div>
      </template>
      <template v-else>
        <CourseList :courses="filteredCourses" />
      </template>
    </div>
  </div>
</template>

<script>
import CourseList from '../components/CourseList'

export default {
  components: {
    CourseList
  },
  props: {
    filter: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    filteredCourses() {
      return this.$store.state.courses.filteredCourses
    }
  },
  created() {
    this.$store.dispatch('courses/setFilter', this.filter).then(() => {
      console.log(this.$store.state.courses.filteredCourses)
      this.$store.dispatch('courses/fetchCoursesByFilter')
    })
  },
  methods: {
    navigateBack() {
      this.$store.dispatch('goBack')
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.courses-filtered {
  padding-top: 58px;
  padding-bottom: 20px;
  
  &-loading {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>