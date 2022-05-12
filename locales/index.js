import en from "./en";
import tr from "./tr";
export const I18N = {
  seo: true,
  locales: [
    {
      code: "en",
      iso: "en-US",
      name: "en",
    },

    {
      code: "tr",
      iso: "tr-TR",
      name: "tr",
    },
  ],
  defaultLocale: "tr",
  vueI18n: {
    fallbackLocale: "en",
    messages: { en, tr },
  },
};
