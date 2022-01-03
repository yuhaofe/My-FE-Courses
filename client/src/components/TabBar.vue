<template>
  <div
    class="tab-bar"
  >
    <router-link
      to="/"
      :class="$route.path === '/' ? 'active' : ''"
    >
      <span>首页</span>
    </router-link>
    <router-link
      to="/favorites"
      :class="$route.path === '/favorites' ? 'active' : ''"
    >
      <span>收藏</span>
    </router-link>
    <router-link
      to="/my"
      :class="$route.path === '/my' ? 'active' : ''"
    >
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {

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

    a {
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
        color: blue;
      }
    }
  }
</style>