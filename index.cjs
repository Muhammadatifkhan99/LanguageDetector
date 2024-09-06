const franc = require('franc');
const lang = require('langs');

const LangCode = franc('Alle menslike wesens word vry');
const language = lang.where("3",LangCode);
console.log(language);