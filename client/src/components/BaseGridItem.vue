<template>
  <router-link
    :to="to"
    tag="div"
  >
    <div class="base-grid-item">
      <img
        :src="images[icon]"
        :alt="text"
      >
      <span>{{ text }}</span>
    </div>
  </router-link>
</template>

<script>
import javascriptPng from '../assets/javascript.png'
import cssPng from '../assets/css.png'
import reactPng from '../assets/react.png'
import vuePng from '../assets/vue.png'
import networkPng from '../assets/network.png'

export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      images: {
        javascript: javascriptPng,
        css: cssPng,
        react: reactPng,
        vue: vuePng,
        network: networkPng
      }
    }
  }
}
</script>

<style lang="scss">
.base-grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 48px;
    height: 48px;
    margin-bottom: 5px;
  }

  > span {
    font-size: 14px;
    color: rgb(100, 100, 100);
  }
}
</style>