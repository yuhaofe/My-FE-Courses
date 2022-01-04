<template>
  <div>
    <transition
      :name="transitionName"
      mode="in-out"
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
    '$route' (to) {
      const isBack = this.$store.state.isBack
      const regex = /(course|tag)\//i
      if (to.path.match(regex) && !isBack){
        this.transitionName = 'slide-in'
      } else if (isBack) {
        this.transitionName = 'slide-out'
      } else {
        this.transitionName = 'no-transition'
      }
      this.$store.dispatch('resetBack')
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
    transform: translateX(100%);
    z-index: 1000;
  }

  .slide-in-enter-to, .slide-out-leave {
    z-index: 1000;
  }

  .page-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 600px;
    height: 100vh;
    background-color: #f4f4f4;
    overflow-y:scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (min-width: 600px) {
    .page-wrapper {
      left: calc(50vw - 300px);
    }
  }
</style>