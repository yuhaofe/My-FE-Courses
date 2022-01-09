<template>
  <div class="page-wrapper">
    <div class="page-home">
      <div class="page-home-header">
        <div class="page-home-title">
          <div
            class="page-home-title-container"
            :style="{ transform: `translateY(${-33.33 * (titleCurrent - 1)}%)`, transition: 'transform 1s'}"
          >
            <span>前端</span><span>课程</span><span>精选</span>
          </div>
        </div>
        <BaseSearchBar route-path="/search" />
      </div>
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
  data() {
    return {
      titleCurrent: 1
    }
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
  },
  mounted() {
    const translate = () => {
        if (this.titleCurrent >= 3) {
          this.titleCurrent = 0
        }
        this.titleCurrent++
        setTimeout(translate, 2000)
      }
      setTimeout(translate, 2000)
  }
}
</script>

<style lang="scss">
.page-home {
  padding-top: 1px;
  padding-bottom: 80px;
  background: linear-gradient(#6db9e3, #f4f4f4 300px);

  &-header {
    display: flex;
    flex-direction: row;
    margin: 10px;
    height: 40px;

    > div:first-of-type {
      flex: 0 0 auto;
    }

    > div:last-of-type {
      flex: 1 1 auto;
    }
  }

  &-title {
    overflow-y: hidden;
    padding: 0 5px;
    margin-right: 5px;

    &-container {
      height: 300%;

      > span {
        height: 33.33%;
        display: block;
        font-size: 28px;
        font-weight: bold;
        color: white;
      }
    }
  }
}
</style>