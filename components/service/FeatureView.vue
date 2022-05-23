<template>
  <div class="service-feature">
    <div class="service-features__row reverse">
      <div class="service-features__col">
        <div class="feature-content">
          <h4 class="title">Bulk Cat Lıtter</h4>
          <div class="text">
            <p>
              We successfully use our 15 years of experience in our sector in
              all kinds of packaging and loading operations in line with the
              demands of our customers. Bulk loading into containers, loading on
              bulk vessels regardless of tonnage are just some of them.
            </p>
          </div>
        </div>
      </div>
      <div class="service-features__col">
        <div class="feature-image">
          <img
            src="https://www.mclbentonite.com//uploads/sayfalar/ac252.png"
            alt="Bulk Cat Lıtter"
          />
        </div>
      </div>
    </div>
    <div class="service-features__row">
      <div class="service-features__col">
        <div class="feature-image">
          <img
            src="https://www.mclbentonite.com//uploads/sayfalar/66782.png"
            alt="Bulk Cat Lıtter"
          />
        </div>
      </div>
      <div class="service-features__col">
        <div class="feature-content">
          <h4 class="title">PACKED CAT LITTER</h4>
          <div class="text">
            <p>
              Although it looks simple, the production and shipment of packaged
              cat litter is a very important operation with the details it has.
            </p>
            <p>
              As a company aiming to keep customer satisfaction at the highest
              level, we take the necessary precautions at the beginning of the
              work regardless of the cost, by emphasizing every detail and
              ignoring any possibility.
            </p>
            <p>
              We attribute our rapid growth in packaged cat litter sales to the
              importance we attach to these details
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="service-features__row reverse">
      <div class="service-features__col">
        <div class="feature-content">
          <h4 class="title">SAME QUALITY ON EVERY CONTINENT</h4>
          <div class="text">
            <p>
              The world is a very small place; We know that the easiest way to
              prove this to ourselves is to sell our cat litter products to
              every continent of the world.
            </p>
            <p>
              We believe this with our entire team and we work faithfully for
              this purpose without taking distance ...
            </p>
          </div>
        </div>
      </div>
      <div class="service-features__col">
        <div class="feature-image">
          <img
            src="https://www.mclbentonite.com//uploads/sayfalar/ac252.png"
            alt="Bulk Cat Lıtter"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.service-feature {
  margin: 0 -20px;
  .service-features__row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;

    .service-features__col {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 30px;
      .title {
        color: #333;
        font-size: 36px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -1px;
        line-height: 1.3;
        margin: 0;
      }
      .text {
        color: #999;
        font-size: 18px;
        font-weight: 600;
        margin-top: 15px;

        line-height: 32px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .feature-image {
        height: 430px;
        border-radius: 11px;
        overflow: hidden;
      }
    }
    @media screen and (max-width: 768px) {
      &.reverse {
        flex-direction: column-reverse;
      }
      .service-features__col {
        width: 100%;
        .title {
          margin-top: 40px;
        }
      }
    }
  }
}
</style>