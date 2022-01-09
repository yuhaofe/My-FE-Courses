<template>
  <div
    class="tab-bar"
  >
    <router-link
      to="/"
      :class="$route.path === '/' ? 'active' : ''"
    >
      <img
        :src="icons.home"
        alt="首页"
      >
      <span>首页</span>
    </router-link>
    <router-link
      to="/favorites"
      :class="$route.path === '/favorites' ? 'active' : ''"
    >
      <img
        :src="icons.favorites"
        alt="收藏"
      >
      <span>收藏</span>
    </router-link>
    <router-link
      to="/my"
      :class="$route.path === '/my' ? 'active' : ''"
    >
      <img
        :src="icons.my"
        alt="我的"
      >
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
import homeIcon from '../assets/home.png'
import homeActiveIcon from '../assets/home-colored.png'
import starIcon from '../assets/star.png'
import starActiveIcon from '../assets/star-colored.png'
import userIcon from '../assets/user.png'
import userActiveIcon from '../assets/user-colored.png'

export default {
  computed: {
    icons() {
      return {
        home: this.$route.path === '/' ? homeActiveIcon : homeIcon,
        favorites: this.$route.path === '/favorites' ? starActiveIcon : starIcon,
        my: this.$route.path === '/my' ? userActiveIcon : userIcon
      }
    }
  }
}
</script>

<style lang="scss">
  .tab-bar {
    position: fixed;
    bottom: 0px;
    width: 100%;
    max-width: 600px;
    border-top: 1px solid rgba(0, 0, 0, 0.04);
    z-index: 1;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    > a {
      flex: 1 1 0;
      height: 60px;
      color: black;
      background-color: white;
      text-decoration: none;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.active {
        color: #6db9e3;
      }

      > img {
        width: 28px;
        height: 28px;
      }

      > span {
        font-size: 12px;
      }
    }
  }
</style>