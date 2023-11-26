import languageConFig from './lang.json';

const I18n =(keyword)=>{
    
const lang = localStorage.getItem("lang") || "en";
   return languageConFig [lang] [keyword];

}
export default I18n;