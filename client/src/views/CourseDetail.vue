<template>
  <div>
    <BaseNavBar
      title="title"
      :show-back="true"
      :show-more="false"
      @on-click-back="$router.go(-1)"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>