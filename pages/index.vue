<template>
  <div>
    <ServicesViewer />
    <!-- Karşılama bölümü -->
    <div class="homepage-banner">
      <div class="banner-wrapper">
        <div class="banner-title">KEDİNİZ İÇİN EN İYİSİ…</div>
        <div class="banner-context">
          Bentonit doğanın bize verdiği en büyük mucizelerden biridir. Bize
          kalan, bu mucizevi minerali en doğru ve çevreci teknolojiyi kullanarak
          ve doğal formunu koruyarak kedi kumuna dönüştürmektir.
        </div>
      </div>
    </div>
    <UtilitySpaces />

    <div class="responsive-container">
      <WorldConnectionAnimate />
      <UtilitySpaces />
      <UtilitySpaces />
      <UtilitySpaces />
      <UtilitySpaces />
      <UtilitySpaces />
      <UtilitySpaces />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.homepage-banner {
  background-image: url("@/assets/arena-bentonite-bg.jpg");
  background-position: center;
  height: 500px;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  &:before {
    content: "";
    position: absolute;
    background: rgba(#000, 0.3);
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    height: 350px;
  }
  .banner-wrapper {
    z-index: 3;
    width: 100%;
    // background: rgba(#000, 0.3);
    padding: 15px;
    max-width: 70%;
    text-align: center;
    color: white;
    @media screen and (max-width: 480px) {
      max-width: 90%;
    }
    .banner-title {
      text-shadow: 1px 1px 8px rgba(#000, 0.5);
      display: block;
      font-size: 40px;
      font-weight: bold;
      @media screen and (max-width: 480px) {
        font-size: 20px;
      }
    }
    .banner-context {
      text-shadow: 1px 1px 3px rgba(#000, 0.7);
      display: block;
      font-size: 18px;
      margin-top: 20px;
      line-height: 30px;
    }
  }
}
</style>