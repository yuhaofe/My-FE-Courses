<template>
  <div class="course-action-bar">
    <div><span>点赞</span></div>
    <div><span>评论</span></div>
    <div><span>收藏</span></div>
    <div
      class="course-action-bar-go"
      @click="openURL"
    >
      <span>前往</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    openURL() {
      window.open(this.course.url, '_blank')
    }
  }
}
</script>

<style lang="scss">
  .course-action-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 600px;
    height: 60px;
    z-index: 10;
    border-top: 1px solid rgba(0, 0, 0, 0.04);
    
    display: flex;
    flex-direction: row;

    > div {
      flex: 1 1 0;
      background-color: white;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div.course-action-bar-go {
      color: white;
      background-color: #6DB9E3;
      font-weight: bold;
    }
  }
</style>