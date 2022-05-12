<template>
  <div
    class="page-header-container"
    :class="{ transition: transition }"
    :style="{
      backgroundImage: `url(${backgroundUrl})`
    }"
  >
    <h1 v-if="title" class="page-header-title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    backgroundUrl: {
      type: String,
      require: true
    },
    title: {
      type: String,
      default: undefined
    },
    transition: { type: Boolean, default: false }
  }
};
</script>

<style lang="scss" scoped>
.page-header-container {
  background-position: center;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
  &.transition {
    transition: background-image 0.1s ease-in-out;
  }
  @media (max-width:768px){
    height: 300px;
  }
  @media (max-width:450px){
    height: 150px;
  }
}
.page-header-title {
  text-align: center;
  color: #fff;
  text-shadow: 0px 0px 4px rgba(#000, 0.8);
}
</style>
