<template>
  <div class="course-detail-wrapper">
    <div class="course-detail">
      <BaseNavBar
        :title="course.title"
        :show-back="true"
        :show-more="false"
        @on-click-back="$router.go(-1)"
      />
      <template v-if="course.loading">
        <div class="course-detail-loading">
          <span>加载中...</span>
        </div>
      </template>
      <template v-else>
        <div
          class="course-detail-cover"
          :style="{
            background: 'no-repeat center center / cover',
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${course.cover})`,
            height: '200px'
          }"
        >
          <div class="course-detail-cover-text">
            <h1>{{ course.title }}</h1>
            <span>by {{ course.author }}</span>
          </div>
        </div>
        <div class="course-detail-section-2col">
          <BaseCard
            :shadow="false"
          >
            <h2>平台</h2>
            {{ course.platform }}
          </BaseCard>
          <BaseCard
            :shadow="false"
          >
            <h2>价格</h2>
            {{ pricingLabel }}
          </BaseCard>
        </div>
        <BaseCard
          :shadow="false"
          class="course-detail-section"
        >
          <template #header>
            <h2>推荐原因</h2>
          </template>
          {{ course.reason }}
        </BaseCard>
        <BaseCard
          :shadow="false"
          class="course-detail-section"
        >
          <template #header>
            <h2>简介</h2>
          </template>
          {{ course.description }}
        </BaseCard>
        <BaseCard
          :shadow="false"
          class="course-detail-section"
        >
          <template #header>
            <h2>标签</h2>
          </template>
          <div class="course-detail-tags">
            <CourseTag
              v-for="tag in course.tags"
              :key="tag"
              :name="tag"
            />
          </div>
        </BaseCard>
        <BaseCard
          :shadow="false"
          class="course-detail-section"
        >
          <template #header>
            <h2>目录</h2>
          </template>
          <ul class="course-detail-contents">
            <li
              v-for="item in contentsItems"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </BaseCard>
        <BaseCard
          :shadow="false"
          class="course-detail-section"
        >
          <template #header>
            <h2>评论</h2>
          </template>
          无
        </BaseCard>
        <CourseActionBar :course="course" />
      </template>
    </div>
  </div>
</template>

<script>
import CourseTag from '../components/CourseTag'
import CourseActionBar from '../components/CourseActionBar'

export default {
  components: {
    CourseTag, CourseActionBar
  },
  computed: {
    course() {
      let course = this.$store.state.courses.course
      if (course.id != this.$route.params.id) {
        course = {
          title: '',
          loading: true
        } 
      }
      return course
    },
    pricingLabel() {
      const pricing = this.course.pricing
      let label = ''
      switch(pricing.type) {
        case 'member':
          label += pricing.unit + pricing.cost + '/月'
          break
        case 'one-time':
          label += pricing.unit + pricing.cost
          break
        case 'free':
          label += '免费'
          break
        default:
          break
      }
      return label
    },
    contentsItems() {
      const contents = this.course.contents
      let items = contents.split(/\r?\n/g)
      return items
    }
  },
  created() {
    this.$store.dispatch('courses/fetchCourse', this.$route.params.id)
  }
}
</script>

<style lang="scss">
.course-detail {
  padding-top: 48px;
  padding-bottom: 80px;

  &-wrapper {
    width: 100%;
    height: 100vh;
  }

  &-loading {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-cover {
    position: relative;
    background: no-repeat center center / cover;
    height: 200px;
    margin-bottom: 10px;

    &-text {
      position: absolute;
      bottom: 0px;
      padding: 10px;
    }
  }

  h1, h2 {
    margin: 0px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 16px;
  }

  &-section {
    margin: 0 10px 10px 10px;

    &-2col {
      margin: 0 10px 10px 10px;

      display: flex;
      flex-direction: row;
      
      > * {
        flex: 1 1 0;
      }

      > *:last-child {
        margin-left: 10px;
      }

      h2 {
        display: inline;
        padding-right: 10px;
      }
    }
  }

  &-tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > *:not(:first-child) {
      margin-left: 5px;
    }
  }

  &-contents {
    padding-left: 20px;
    margin: 0;
  }
}
</style>