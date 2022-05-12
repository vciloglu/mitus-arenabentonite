<template>
  <svg
    :class="{
      open: value
    }"
    viewBox="0 0 100 100"
  >
    <path
      class="line line1"
      :class="{ white: value }"
      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
    />
    <path class="line line2" d="M 20,50 H 80" :class="{ white: value }" />
    <path
      class="line line3"
      :class="{ white: value }"
      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
    />
  </svg>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: 0
    };
  },
  computed: {
    color() {
      return this.value ? true : this.scroll > 1 ? false : true;
    }
  },
  methods: {
    handleScroll() {
      this.scroll = window.scrollY;
    }
  },
  mounted() {},
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.menu {
  // background-color: transparent;
  // // box-shadow: 0px 0px 5px -2px black;
  // cursor: pointer;
  // display: flex;
  // padding: 0;
  border: none;
  outline: none;
}
.line {
  fill: none;
  stroke-width: 6;
  stroke: #333;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 600ms cubic-bezier(0.4, 0, 0.2, 1);
  &.white {
    stroke: #9c9c9a;
  }
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.open {
  .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
}
</style>
