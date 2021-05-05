import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import moment from "momentsjs";

import { default as TRANSLATIONS_HB} from "./hb/translation.json";
import {default as TRANSLATIONS_EN } from "./en/translation.json";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     hb: {
       translation: TRANSLATIONS_HB
     }
   }
 });
 
i18n.changeLanguage("hb");












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