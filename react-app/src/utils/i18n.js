import languageConFig from './lang.json';

const I18n =({lang, keyword})=>{

   return languageConFig [lang] [keyword];

}
export default I18n;