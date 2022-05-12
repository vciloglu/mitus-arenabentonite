<template>
  <h1 :class="{ sm: small }">
    <span v-html="black"></span>
    <span class="grey" v-html="grey"></span>
  </h1>
</template>

<script>
export default {
  props: {
    black: {
      type: String,
      require: true,
    },
    grey: {
      type: String,
      require: true,
    },
    small: Boolean,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  &.sm {
    font-size: 28px;
    .grey {
      margin-left: -5px;
    }
  }
  @media (max-width: 768px) {
    font-size: 25px;
  }
  span {
    word-break: break-all;
  }
  .grey {
    color: #9e9e9c;
    margin-left: -6px;
  }
}
</style>
