<template>
  <div style="margin-top: 60px; padding: 10">
    <div class="service-banner">
      <h1 style="text-transform: uppercase">{{ $route.params.service }}</h1>
    </div>
    <UtilitySpaces />
    <div v-if="$route.params.service !== 'catsarena'">
      <div class="responsive-container">
        <ServiceFeatureView />
      </div>
      <UtilitySpaces />
      <section class="section-parallax">
        <div class="container">
          <div class="section-header">
            <h5 class="title">PRIVATE LABEL PACKAGING</h5>
            <div class="text">
              We can create your private label brand together, in accordance
              with granule size , the type of packaging, the fragrance and
              colored granules and the delivery term you prefer..
            </div>
          </div>
          <div class="buttons-container">
            <a class="button" href="#"> Click For Creataing Your Own Brand </a>
          </div>
        </div>
      </section>
    </div>
    <div v-else-if="$route.params.service === 'catsarena'">
      <ServiceProductList />
      <UtilitySpaces />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params);
  },
};
</script>

<style lang="scss" scoped>
.section-parallax {
  //https://www.mclbentonite.com/assets/img/cover-1.jpg
  background-image: url("https://www.mclbentonite.com/assets/img/cover-1.jpg");
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 100% auto;
  background-attachment: scroll;
  width: 100%;
  height: 550px;
  @media screen and (max-width: 768px) {
    height: 400px;
  }
  .section-header {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    padding: 0 75px;
    .title {
      color: #222;
      font-size: 30px;
      letter-spacing: -0.5px;
      font-weight: 800;
      line-height: 1.3;
      margin: 0;
    }
    .text {
      color: rgba(51, 51, 51, 0.6);
      font-size: 18px;
      line-height: 1.6;
      margin-top: 20px;
    }
  }
  .buttons-container {
    text-align: center;
    margin-top: 20px;
    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding-left: 30px;
      padding-right: 30px;
      font-family: inherit;
      text-align: center;
      line-height: 1.2;
      outline: 0;
      font-size: 18px;
      font-weight: 800;
      border-radius: 8px;
      height: 65px;
      color: #fff;
      text-decoration: none;
      transition: 0.3s;
      border: 2px solid transparent;
      background: #ed1c24;
    }
  }
}

.service-banner {
  background-image: url("https://thumbs.dreamstime.com/b/zeolite-natural-raw-stones-powder-black-stone-background-selective-focus-mesolite-macro-shot-149541600.jpg");
  height: 510px;
  filter: grayscale(1);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  text-shadow: 1px 1px 3px #000;
  text-transform: capitalize;
  @media screen and (max-width: 480px) {
    height: 370px;
  }
}
</style>