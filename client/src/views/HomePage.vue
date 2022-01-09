<template>
  <div class="page-wrapper">
    <div class="page-home">
      <BaseCarousel :length="carouselItems.length">
        <BaseCarouselItem
          v-for="item in carouselItems"
          :key="item.to"
          :image="item.image"
          :title="item.title"
          :to="item.to"
        />
      </BaseCarousel>
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
    },
    carouselItems() {
      return this.$store.state.courses.courses.slice(0, 4).map(c => ({
        image: c.cover,
        title: c.title,
        to: '/course/' + c.id
      }))
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