import menuList from "@/data/menuData";
import "./menuStyle.scss";
export default {
  // must for seo
  data() {
    return {
      show: true,
      menus: menuList,
      menuOpen: false,
      scroll: 0,
      oldScroll: 0,
      timer: setTimeout(() => {}, 500),
    };
  },
  computed: {
    filterLeft() {
      return this.menus.filter((e) => e.positionLeft);
    },
    filterRight() {
      return this.menus.filter((e) => !e.positionLeft);
    },
    availableLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      );
    },
  },
  watch: {
    menuOpen(newValue, oldValue) {
      if (newValue) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
    "$route.path"() {
      this.menuOpen = false;
    },
    scroll(newValue, oldValue) {
      if (newValue < 80) {
        this.show = true;
      } else if (newValue < this.oldScroll) {
        this.show = true;
      } else if (newValue > this.oldScroll) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
  methods: {
    handleScroll() {
      // Your scroll handling here
      this.scroll = window.scrollY;
      clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        this.oldScroll = this.scroll;
      }, 10);
    },
    serviceMenuRender() {
      return this.filterLeft.map((item) => {
        return (
          <nuxt-link class="menu-link" to={this.localePath(item.link)}>
            <span>{item.cats ? "CATS" : "ARENA"}</span>
            <span class="gray">{this.$t(item.i18n)}</span>
          </nuxt-link>
        );
      });
    },
    linkMenuRender() {
      return this.filterRight.map((item) => {
        return (
          <nuxt-link to={this.localePath(item.link)} class="menu-link">
            {this.$t(item.i18n)}
          </nuxt-link>
        );
      });
    },
    languageMenuRender() {
      return this.availableLocales.map((locale) => {
        return (
          <nuxt-link
            class="menu-link language"
            to={this.switchLocalePath(locale.code)}
          >
            {locale.name}
          </nuxt-link>
        );
      });
    },
    menuToggleClickHandler() {
      this.menuOpen = !this.menuOpen;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  render() {
    return (
      <div class={{ menu: true, show: this.menuOpen ? true : this.show }}>
        <div class="responsive-menu">
          <nuxt-link to={this.localePath("/")} class="logo">
            <LogoArena />
          </nuxt-link>
          <div class={{ "menu-container": true, open: this.menuOpen }}>
            {/*MENU {left}*/}
            <div class="menu-container_flex">{this.serviceMenuRender()}</div>
            {/*MENU {right}*/}
            <div class="menu-container_flex right-menu">
              {this.linkMenuRender()}
              {this.languageMenuRender()}
            </div>
          </div>
          <MenuRenderToggleButton
            class="toggle-button opened"
            vModel={this.menuOpen}
            vOn:click_native={this.menuToggleClickHandler}
          />
        </div>
      </div>
    );
  },
};
