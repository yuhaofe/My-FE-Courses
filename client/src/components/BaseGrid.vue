<template>
  <div
    class="base-grid"
    :class="`base-grid-col-${col}`"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    col: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style lang="scss">
.base-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  margin: 10px;

  > * {
    flex: 0 0 20%;
    border: 1px solid rgba(0, 0, 0, 0.02);
    padding: 10px;
  }

  @for $i from 1 through 10 {
    &-col-#{$i} > * {
      flex-basis: (100% / $i);
    }
  }
}
</style>