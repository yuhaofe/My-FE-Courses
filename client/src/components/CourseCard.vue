<template>
  <div class="course-card">
    <!-- row 1 -->
    <div class="course-card-row-1">
      <div>
        <img
          :src="course.cover"
          alt="课程封面"
        >
      </div>
      <div>
        <div class="course-card-line">
          <span class="course-card-title">{{ course.title }}</span>
          <span class="course-card-pricing">{{ pricingLabel }}</span>
        </div>
        <div class="course-card-line">
          <span>{{ course.author }}</span>
          <span>{{ course.platform }}</span>
        </div>
        <div class="course-card-desc">
          {{ course.description }}
        </div>
      </div>
    </div>
    <!-- row 2 -->
    <div class="course-card-row-2">
      <div class="course-card-tags">
        <CourseTag
          v-for="tag in course.tags"
          :key="tag"
          :name="tag"
        />
      </div>
      <div class="course-card-feedback">
        <img
          src="../assets/upvote.png"
          alt="点赞"
        >
        <span>{{ course.upvotes }}</span>
        <img
          src="../assets/comment.png"
          alt="评论"
        >
        <span>{{ course.comments }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CourseTag from './CourseTag'

export default {
  components: {
    CourseTag
  },
  props: {
    course: {
      type: Object,
      default() {
        return {
          id: -1,
          title: '获取课程信息失败',
          author: '',
          description: '',
          pricing: {
            type: 'free', // free/one-time/member
            cost: 0, // fee/month fee
            unit: '', // $/¥/...
          }, 
          platform: '',
          cover: '',
          upvotes: 0,
          comments: 0,
          tags: []
        }
      }
    }
  },
  computed: {
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
    }
  }
}
</script>

<style lang="scss">
.course-card {
  width: 100%;
  padding: 10px;
  font-size: 12px;
  background-color: #ffffff;

  &-row-1 {
    display: flex;
    flex-direction: row;
    align-items: center;

    > div:first-of-type {
      flex: 0 0 auto;
      margin-right: 10px;
      width: 120px;
      height: 90px;
      background-color: grey;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    > div:last-of-type {
      flex: 1 1 auto;
      width: 0px;
    }
  }

  &-row-2 {
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    > div:first-of-type {
      flex: 1 1 auto;
    }

    > div:last-of-type {
      flex: 0 0 auto;
    }
  }

  &-line {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > span:first-of-type {
      flex: 1 1 auto;
      margin-right: 5px;
    }

    > span:last-of-type {
      flex: 0 0 auto;
    }
  }

  &-title {
    font-size: 14px;
    font-weight: bold;
  }

  &-pricing {
    color: #ff5656;
    font-weight: bold;
  }

  &-desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(100, 100, 100);
  }

  &-tags{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
    height: 20px;

    &::-webkit-scrollbar {
      display: none;
    }

    > span {
      flex: 0 0 auto;
    }

    > span:not(:first-of-type) {
      margin-left: 4px;
    }
  }

  &-feedback {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: rgb(100, 100, 100);

    > *:nth-child(odd) {
      margin-left: 5px;
    }

    img {
      height: 20px;
      width: 20px;
      filter: contrast(0.2);
    }
  }
}
</style>