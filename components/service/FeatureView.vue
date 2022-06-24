<template>
  <div class="service-feature">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="service-features__row"
      :class="{ 'row-reverse': item.reverse }"
    >
      <div class="service-features__col">
        <div class="feature-content">
          <h4 class="title">{{ item.title }}</h4>
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
      <div class="service-features__col">
        <div class="feature-image">
          <img :src="item.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: [
      {
        title: "Kedi Kumu Bentoniti",
        text: "Sektörümüzdeki 15 yıllık tecrübemizi müşterilerimizin talepleri doğrultusunda beyaz (kalsiyum), yeşil veya sarı (Sodyum)  bentonit gönderimi yapmaktayız.",
        image: require("@/components/service/assets/feature-1.jpg"),
      },
      {
        reverse: true,
        title: "Seramik Bentoniti",
        text: "Ham veya Öğütülmüş olarak, paketlenmiş şekilde gönderimi sağlanmaktadır.",
        image: require("@/components/service/assets/feature-2.jpg"),
      },
      {
        title: "Sondaj Bentoniti",
        text: "Ham veya Öğütülmüş olarak, paketlenmiş şekilde gönderimi sağlanmaktadır.",
        image: require("@/components/service/assets/feature-3.jpg"),
      },
      {
        reverse: true,
        title: "Kozmetik Bentoniti",
        text: "Doğal şekilde üretilen, sürülebilir jel kıvamında 10-20 kg cam paketlerde gönderimi yapılmaktadır.",
        image: require("@/components/service/assets/feature-4.jpg"),
      },
      {
        title: "Kağıt Bentoniti",
        text: "Ham büyük çuvallarda veya öğütülmüş Kraft 25 kg torbalarda talebiniz üzerine gönderimi yapılmaktadır..",
        image: require("@/components/service/assets/feature-5.jpg"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.service-feature {
  margin: 0 -20px;
  .service-features__row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
    &.row-reverse {
      flex-direction: row-reverse;
    }

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