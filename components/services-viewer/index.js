import "./styles.scss";
export default {
  data() {
    return {
      services: [
        {
          title: "Bentonite",
          service: "bentonite",
          background: "bentonite.jpg",
        },
        {
          title: "Cats Arena",
          service: "catsarena",
          background: "cats-arena-box.jpg",
        },
        {
          title: "Kozmetik",
          service: "cosmetic",
          background: "cosmetic.jpg",
        },
      ],
    };
  },
  methods: {
    style(item) {
      return {
        backgroundImage: `url(${require(`./bg/${item.background}`)})`,
      };
    },
    getLogo(title) {
      let logo = <div></div>;
      switch (title) {
        case "cosmetic":
          logo = <LogoArena cosmetic white />;
          break;
        case "catsarena":
          logo = <LogoCatsArena white />;
          break;
        default:
          logo = <LogoArena white />;
          break;
      }
      return logo;
    },
    renderServiceList() {
      return this.services.map((item) => {
        return (
          <div class="slider-item" style={this.style(item)}>
            <nuxt-link
              to={{
                name: `service-service___${this.$i18n.locale}`,
                params: { service: item.service },
              }}
            >
              <div class="background-content">
                <IconsTap class="tap-icon" color="#fff" opacity="0.5" />
                <div class="slider-content">
                  {this.getLogo(item.service)}
                  <div class="line"></div>
                </div>
              </div>
            </nuxt-link>
          </div>
        );
      });
    },
  },
  render() {
    return <div class="home-page-slider">{this.renderServiceList()}</div>;
  },
};

/* 
<template>
  <div class="home-page-slider">
    <div
      v-for="(item, index) in slider"
      :key="index"
      class="slider-item"
      :style="style(item)"
    >
      <nuxt-link
        :to="{
          name: `service-service___${$i18n.locale}`,
          params: { service: item.service },
        }"
      >
        <div class="background-content">
          <TapIcon class="tap-icon" color="#fff" opacity="0.5" />
          <div class="slider-content">
            <MitusProje v-if="item.title == 'Proje'" color="white" />
            <MitusArama v-if="item.title == 'Arama'" color="white" />
            <MitusCevre v-if="item.title == 'Çevre'" color="white" />
            <div class="line"></div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
*/
