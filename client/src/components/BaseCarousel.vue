<template>
  <div class="base-carousel">
    <div
      class="base-carousel-container"
      :style="{
        width: length * 100 + '%',
        transform: `translateX(${(-100.0 / length) * (current - 1)}%)`,
        transition: 'transform 1s'
      }"
      @touchstart="carouselTouchStart"
      @touchmove.prevent="carouselTouchMove"
      @touchend="carouselTouchEnd"
    >
      <slot />
    </div>
    <div class="base-carousel-indicator">
      <div
        v-for="i in length"
        :key="i"
        class="base-carousel-indicator-dot"
        :class=" i === current ? 'base-carousel-indicator-dot-active' : ''"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      default: 1
    },
  },
  data() {
    return {
      current: 1
    }
  },
  watch: {
    length: 'setChildrenWidth',
    current: function(val) {
      if (val > this.length) {
        this.current = 1
      } 
      if (val < 1) {
        this.current = this.length
      }
    }
  },
  mounted() {
    this.setChildrenWidth()
    this.setAutoScroll()
  },
  methods: {
    setAutoScroll() {
      const translate = () => {
        this.current++
        this.timeout = setTimeout(translate, 3000)
      }
      this.timeout = setTimeout(translate, 3000)
    },
    setChildrenWidth() {
      this.$nextTick(() => {
        if (this.$slots.default) {
          this.$slots.default.forEach((node) => {
            node.elm.style.width = 100.0 / this.length + '%'
          })
        }
      })
    },
    carouselTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX
      clearTimeout(this.timeout)
    },
    carouselTouchMove() {

    },
    carouselTouchEnd(e) {
      this.touchEndX = e.changedTouches[0].screenX
      if (this.touchStartX < this.touchEndX) {
        this.current--
      } else if (this.touchStartX > this.touchEndX) {
        this.current++
      }
      this.setAutoScroll()
    }
  },
}
</script>

<style lang="scss">
.base-carousel {
  height: 200px;
  margin: 10px;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;

  &-container {
    height: 100%;
    white-space: nowrap;
  }

  &-indicator {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;

    &-dot {
      height: 10px;
      width: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 50%;

      &-active {
        background-color: rgba(0, 0, 0, 0.4);
      }

      &:not(:first-child) {
        margin-left: 5px;
      }
    }
  }
}
</style>