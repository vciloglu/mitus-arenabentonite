<template>
  <div class="product-wrapper-flex">
    <div class="cols" v-for="item in 10" :key="item">
      <div class="product-content">
        <div class="product-header">
          <div class="product-photo">
            <img
              :src="require('@/assets/catsarenabox.png')"
              alt="CATMANIA BABY POWDER"
            />
          </div>
        </div>

        <div class="product-footer">
          <h3 class="title">CATMANIA BABY POWDER</h3>
          <div class="text">
            Catmania Baby Powder Litter is an excellent clumping cat litter with
            gentle baby powder scent, thanks white bentonite minerals that gives
            symbol of cleaness, freshness and hygine, Catmania Baby Powder Cat
            Litter creates a comfortable environment for your cat.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product-wrapper-flex {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  .cols {
    width: 33.33%;
    padding: 10px;
    text-align: center;
    @media screen and (max-width: 768px) {
      width: 50%;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
    }
    .product-content {
      border: 1px solid rgba(0, 0, 0, 0.08);
      padding: 10px;
      border-radius: 11px;
      transition: all 0.3s ease-in-out;
      max-width: 350px;
      margin: 0 auto;
      &:hover {
        box-shadow: 0 0.625rem 0.875rem -0.3125rem rgb(0 0 0 / 10%);
        border: 1px solid transparent;
      }
    }
    .product-header {
      height: 200px;
      padding: 20px 20px 0px;
      .product-photo {
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
    .product-footer {
      padding-top: 30px;
      text-align: center;
      padding: 30px 25px 30px;
      .title {
        color: #585858;
        letter-spacing: -0.3px;
        line-height: 1.3;
        text-overflow: ellipsis;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 900;
        white-space: nowrap;
        overflow: hidden;
      }
      .text {
        color: #999;
        overflow: hidden;
        margin-top: 7px;
        text-overflow: ellipsis;
        line-height: 22px;
        font-size: 12px;
      }
    }
  }
}
</style>