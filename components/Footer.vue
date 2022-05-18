<template>
  <div class="footer-container">
    <div class="responsive-container">
      <div class="footer-contents">
        <div class="footer-contents_item:contacts">
          <div class="top-line-logo">
            <LogoArena white style="padding: 0 40px 0 0" />
          </div>
          <div class="middle-line-address">
            <p>
              Mustafa Kemal Mahallesi 2131.Cadde Aslanlar Plaza No:24/9-11 06510
              Çankaya/ANKARA
            </p>
            <p>
              <span>T +90 312 503 73 99</span>
              <span>F +90 312 503 73 98</span>
            </p>
          </div>
          <div class="bottom-line-socialmedia">
            <a href="https://twitter.com/mitusproje" target="_blank">
              <ImagesTwitterLogo opacity="0.6" class="social-icon" />
              <span>/mitusproje</span>
            </a>
            <a href="https://www.instagram.com/mitusproje/" target="_blank">
              <ImagesInstagramLogo opacity="0.6" class="social-icon" />
              <span>/mitusproje</span>
            </a>
            <a
              href="https://www.linkedin.com/company/mitusproje/"
              target="_blank"
            >
              <ImagesLinkedinLogo opacity="0.6" class="social-icon" />
              <span>/mitusproje</span>
            </a>
          </div>
        </div>
        <div class="footer-contents_item:iframe">
          <vue-friendly-iframe class="fixed-iframe" :src="iframeUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24481.81098471202!2d32.771204!3d39.91395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e17608a982928a4!2zTcSwVFVT!5e0!3m2!1str!2str!4v1604184083348!5m2!1str!2str",
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  padding: 20px 15px;
  color: #fff;
  background: #333;
  .footer-contents {
    display: flex;
    @media (max-width: 1024px) {
      .footer-contents_item\:contacts {
        margin-right: 20px;
      }
    }
    .footer-contents_item {
      padding: 10px;
      flex: 1;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .footer-contents_item\:contacts {
        margin-right: 0;
        margin-bottom: 30px;
      }
    }
    .footer-contents_item {
      padding: 10px;
      flex: 1;
    }
  }
  .top-line-logo {
    h1 {
      font-size: 100%;
      padding: 0;
      margin: 0;
      font-weight: normal;
    }
  }
  .middle-line-address {
    font-size: 14px;
    color: #b6b6b6;
    span {
      display: inline-block;
    }
    p > span:last-child {
      padding-left: 5px;
      margin-left: 5px;
      border-left: 1px solid #b6b6b6;
    }
  }
  .bottom-line-socialmedia {
    display: flex;
    a {
      text-decoration: none;
      color: #b6b6b6;
      font-size: 12px;
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
      }
      margin-right: 10px;
    }
    .social-icon {
      width: 25px;
    }
  }
}
.responsive-container {
  padding: 0;
}
.footer-contents_item\:contacts {
  width: 100%;
  max-width: 400px;
  margin-right: 100px;
}
::v-deep.footer-contents_item\:iframe {
  flex: 1;
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
    min-height: 200px;
  }
}
</style>
