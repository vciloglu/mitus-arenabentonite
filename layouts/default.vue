<template>
  <div class="app-layout">
    <SplashScreen />
    <MenuRender />
    <Nuxt class="navbar-missing" />
    <Footer />
  </div>
</template>
<style lang="scss">
:root {
  --swiper-theme-color: #585850;
}
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar-missing {
  flex: 1;
  margin-top: 60px;
  &.full-page {
    margin-top: 0 !important;
  }
}

body,
html {
  margin: 0;
  padding: 0;
  font-family: "Dosis", sans-serif;
  color: #222;
  // overflow-x: hidden;
  .overflow-hidden {
    overflow: hidden;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
.responsive-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  /* Small (sm) */
  @media (min-width: 640px) {
    width: 600px;
  }

  /* Medium (md) */
  @media (min-width: 768px) {
    width: 750px;
  }

  /* Large (lg) */
  @media (min-width: 1024px) {
    width: 992px;
  }

  /* Extra Large (xl) */
  @media (min-width: 1280px) {
    width: 1200px;
  }
}
</style>
