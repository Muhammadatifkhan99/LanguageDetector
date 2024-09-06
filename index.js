import {franc, francAll} from 'franc'
import langs from 'langs';

// const franc = require('franc');
// const lang = require('langs');

const LangCode = franc('Alle menslike wesens word vry');
const language = langs.where("3",LangCode);
console.log(language.name);