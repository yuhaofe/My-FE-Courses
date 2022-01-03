<template>
  <div
    class="base-card"
    :class="shadow ? 'shadow-on' : 'shadow-off'"
    v-on="$listeners"
  >
    <div
      v-if="$slots.header"
      class="base-card-header"
    >
      <slot name="header" />
    </div>
    <div class="base-card-body">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="base-card-footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shadow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.base-card {
  font-size: 12px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  &.shadow-on {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }

  &.shadow-off {
    box-shadow: none;
  }

  &-header, &-body, &-footer {
    width: 100%;
    padding: 10px;
  }

  &-header {
    flex: 0 0 auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  }

  &-footer {
    flex: 0 0 auto;
    border-top: 1px solid rgba(0, 0, 0, 0.04);
  }

  &-body {
    flex: 1 0 auto;
  }
}
</style>