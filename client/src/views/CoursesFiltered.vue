<template>
  <div class="page-wrapper">
    <div class="courses-filtered">
      <BaseNavBar
        :title="title"
        :show-back="true"
        :show-more="false"
        @on-click-back="navigateBack"
      />
      <template v-if="filteredCourses.loading">
        <div class="courses-filtered-status">
          <span>加载中...</span>
        </div>
      </template>
      <template v-else-if="filteredCourses.length === 0">
        <div class="courses-filtered-status">
          <span>暂无结果</span>
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
    },
    title() {
      let title = ''
      if (this.filter.tag) {
        title = this.filter.tag.toUpperCase()
      }  else if (this.filter.search != undefined) {
        title = `"${this.filter.search}"的搜索结果`
      }
      return title
    }
  },
  created() {
    this.$store.dispatch('courses/setFilter', this.filter).then(() => {
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
  
  &-status {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>