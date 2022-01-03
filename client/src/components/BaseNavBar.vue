<template>
  <div class="base-nav-bar">
    <div
      v-show="showBack"
      class="base-nav-bar-back"
      @click="$emit('on-click-back')"
    >
      <img
        src="../assets/back.png"
        alt="返回"
      >
    </div>
    <div class="base-nav-bar-title">
      {{ title }}
    </div>
    <div
      v-show="showMore"
      class="base-nav-bar-more"
      @click="$emit('on-click-more')"
    >
      <img
        src="../assets/more.png"
        alt="更多"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: true
    },
    showMore: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.base-nav-bar {
  position: fixed;
  top: 0px;
  width: 100%;
  max-width: 600px;
  height: 48px;
  background-color: white;
  z-index: 10;
  
  display: flex;
  flex-direction: row;
  align-items: center;

  &-back {
    flex: 0 0 auto;
    padding: 8px;
    height: 100%
  }

  &-title {
    flex: 1 1 auto;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &-more {
    flex: 0 0 auto;
    padding: 8px;
    height: 100%
  }

  img {
    width: 32px;
    height: 32px;
  }
}
</style>