
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en/translation.json";

 import translationHE from "./he/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  he:{
    translation:translationHE
  }

};
i18n.dir();
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "he",

    keySeparator: false, // we do not use keys in form messages.welcome
    returnObjects:true,

  });

export default i18n;












// import TRANSLATIONS_HB from "./hb/translation.json";
// import TRANSLATIONS_EN from "./en/translation.json";

// i18n
   
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     returnEmptyString: false,
//     resources: {
      
//       en: {
//         translation: TRANSLATIONS_EN
//       },
//       zh: {
//         translation: TRANSLATIONS_HB
//       }
//     }
//   });
//   i18n.init({
//     interpolation: { escapeValue: false },  // React already does escaping
// });

// // i18n.init({
// //   interpolation: {
// //     format: function (value, format, lng) {
// //       // if (value instanceof Date) return moment(value).format(format);
// //       if (typeof value === "number")
// //         return new Intl.NumberFormat().format(value);
// //       return value;
// //     }
// //   }
// // });

export { i18n };