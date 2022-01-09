<template>
  <div class="base-carousel-item">
    <router-link
      :to="to"
      tag="span"
    >
      <div
        class="base-carousel-item-image"
        :style="{
          background: 'no-repeat center center / cover',
          backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${image})`,
        }"
      >
        <span>{{ title }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.base-carousel-item {
  display: inline-block;
  height: 100%;

  &-image {
    height: 100%;
    width: 100%;
    position: relative;

    > span {
      color: rgb(50, 50, 50);
      font-size: 24px;
      font-weight: bold;
      position: absolute;
      bottom: 15px;
      left: 0;
      right: 0;
      padding: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>