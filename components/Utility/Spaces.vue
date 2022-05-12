<template>
  <div class="spaces " :class="{small:small}"></div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false
    },
  },
};
</script>

<style lang="scss" scoped>
.spaces {
  width: 100%;
  padding: 50px 0;
  &.small{
    padding: 25px 0;
  }
}
</style>
