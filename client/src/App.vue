<template>
  <div>
    <transition
      :name="transitionName"
      mode="out-in"
    >
      <router-view />
    </transition>
    <TabBar v-show="showTabBar" />
  </div>
</template>

<script>
import TabBar from './components/TabBar'

export default {
  components: { TabBar },
  data: function() {
    return {
      transitionName: 'no-transition'
    }
  },
  computed: {
    showTabBar() {
      const tabsPath = ['/', '/favorites', '/my']
      return tabsPath.includes(this.$route.path)
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path.includes('course/')){
        this.transitionName = 'slide-in'
      } else if (from.path.includes('course/')) {
        this.transitionName = 'slide-out'
      } else {
        this.transitionName = 'no-transition'
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  body {
    max-width: 600px;
    height: 100vh;
    margin: 0px auto;
    background-color: #f4f4f4;
  }

  * {
    box-sizing: border-box;
  }

  .slide-in-enter-active, .slide-out-leave-active {
    transition: transform .5s;
  }

  .slide-in-enter, .slide-out-leave-to {
    transform: translateX(100%)
  }
</style>