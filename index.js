import {franc, francAll} from 'franc'
import langs from 'langs';
import colors from 'colors';
const input = process.argv[2];

// const franc = require('franc');
// const lang = require('langs');

const LangCode = franc(input);
if(LangCode === 'und'){
    console.log("SORRY COULDNOT FIGURE IT OUT!! TRY OUT WITH MORE SAMPLE TEXT!!!".red);
}
else {
    const language = langs.where("3",LangCode);
    console.log(language.name.green);
}
