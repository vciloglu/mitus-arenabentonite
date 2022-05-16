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
    <UtilitySpaces />
    <div class="responsive-container">
      <div class="descriptions-card">
        <div class="card" v-for="(item, index) in descriptions" :key="index">
          <img :src="item.img" alt="" />
          <div class="context">{{ item.context }}</div>
        </div>
      </div>
      <!-- <div class="features-wrapper">
      <div class="responsive-container features-container">
        <div class="features-content" v-for="(feature, i) in features" :key="i">
          <img :src="feature.img" alt="" />
          <span v-html="feature.text['tr'].replace(' ', '<br>')"></span>
        </div>
      </div>
    </div> -->
      <UtilitySpaces />
      <div class="video-features">
        <div class="video-content">
          <video width="100%" height="auto" muted loop preload="auto" autoplay>
            <source :src="require('@/assets/video.mp4')" type="video/mp4" />
          </video>
        </div>
        <div class="features-container">
          <div
            class="features-content"
            v-for="(feature, i) in features"
            :key="i"
          >
            <img :src="feature.img" alt="" />
            <span v-html="feature.text['tr'].replace(' ', '<br>')"></span>
          </div>
        </div>
      </div>
    </div>

    <UtilitySpaces />

    <div class="responsive-container">
      <WorldConnectionAnimate />

      <UtilitySpaces />
      <UtilitySpaces />
      <UtilitySpaces />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    descriptions: [
      {
        id: 1,
        img: require("@/assets/bentonite-sand.png"),
        context:
          "Bentonit kumlar, kompakt granül boyutu ile mükemmel bir topaklanma performansı sağlar. Daha büyük granül boyutlu kedi kumlarına kıyasla çok yüksek emme kapasitesine sahiptir.",
      },
      {
        id: 2,
        img: require("@/assets/bentonite-sand-ball.png"),
        context:
          "Isıl işlemden geçirilerek üretildiği için son derece hijyenik olan bentonit serisi kedi kumlarımızda çift eleme sistemi kullanılır ve toz minimuma indirilir.. Bu sayede minik dostlarımıza ve sahiplerine çok daha hijyenik ve çok daha konforlu bir ortam sağlar",
      },
      {
        id: 3,
        img: require("@/assets/sweet-cat.png"),
        context:
          "Çok verimli koku kontrol gücü ile ekonomik ve uzun ömürlü kullanım için mükemmel performans sağlar. Genellikle pençeleri hassas olan kedi yavruları tarafından tercih edilir.",
      },
      {
        id: 4,
        img: require("@/assets/bentonite-sand.png"),
        context:
          "Bentonit içeren kedi kumu ürünleri, kompakt granül boyutu sayesinde mükemmel bir topaklanma performansı sağlar. Farklı granül boyutlarına sahip kedi kumu ürünleri üretilebilmekte olup, kompakt yani ince taneli bentonit formatında üretimi yapılan kedi kumları daha büyük taneli granül boyutlu kedi kumlarına kıyasla çok daha yüksek sıvı ve koku emme kapasitesine sahiptir.",
      },
      {
        id: 5,
        img: require("@/assets/bentonite-sand-ball.png"),
        context:
          "Doğal formundaki bentonit hammaddesi %30-35 nem içeriğine sahiptir, hammadde kurutma işleminden geçirilerek nem içeriği %8-12 arasına indirilmekte ve sonrasında eleme sistemleri ile tane boyutuna göre sınıflandırılmaktadır. Eleme işleminden çıkan granül haldeki kedi kumları ise paketleme makinalarında istenilen ölçülerde ambalajlanmaktadır. Üretim ve paketleme prosesi son derece hijyenik olmakla birlikte proses sürecinde oluşan tozlar sistemden alınarak toz içeriği minimum seviyelere düşürülmektedir. ",
      },
      {
        id: 6,
        img: require("@/assets/sweet-cat.png"),
        context:
          "Granül hale getirilen bentonit hammaddesinden üretilen kedi kumları yüksek sıvı emme kapasitesine, düşük toz içeriğine ve yüksek topaklanma kapasitesine sahip olurlar. Dolayısı ile bu kedi kumları sıvı emme ve topaklanma özelliği sayesinde hijyen sağlamasının yanı sıra koku emme özelliği ile de total bir hijyen sağlamaktadır. ",
      },
    ],
    features: [
      {
        text: { tr: "KOKU KİLİDİ", en: "ODOUR LOCK" },
        img: require("@/assets/koku.svg"),
      },
      {
        text: { tr: "GÜÇLÜ TOPAKLANMA", en: "STRONG CLUMPING" },
        img: require("@/assets/scoop.svg"),
      },
      {
        text: {
          tr: "YÜKSEK EMİLİM",
          en: "HIGH APSORPTION",
        },
        img: require("@/assets/water.svg"),
      },
      {
        text: { tr: "%99,5 TOZSUZ", en: "%99.5 DUST FREE" },
        img: require("@/assets/dust.svg"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.video-features {
  position: relative;
  .video-content {
    max-width: 900px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    font-size: 0;
  }
  margin-bottom: 100px;
  .features-container {
    display: flex;
    position: absolute;
    bottom: -80px;
    justify-content: flex-end;
    width: 100%;
    .features-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #8bc63f;
      background: #fff;
      border-radius: 5px;
      padding: 10px;
      box-shadow: 0px 0px 20px rgba(#000, 0.2);
      margin: 10px;
      &:not(:last-child) {
      }
      img {
        width: 100px;
        font-size: 0;
      }
      text-align: center;
      // 640px
      // 768px
      // 1024px
      // 1280px
      @media screen and (max-width: 1024px) {
        img {
          width: 60px;
        }
        span {
          font-size: 12px;
        }
      }
      @media screen and (max-width: 768px) {
        img {
          width: 40px;
        }
        span {
          font-size: 8px;
        }
      }
    }
  }
}
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
.descriptions-card {
  display: flex;
  flex-wrap: wrap;
  .card {
    width: 33%;
    padding: 20px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 980px) {
      width: 50%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    img {
      max-width: 120px;
      border: 5px solid #fff;
      border-radius: 100%;
      box-shadow: 0px 1px 7px rgba(#000, 0.3);
      margin-bottom: 50px;
    }
    .context {
      line-height: 26px;
      color: #888;
      text-align: justify;
    }
  }
}
</style>