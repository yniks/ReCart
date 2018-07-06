const puppeteer = require('puppeteer');
var global={};
async function d(){
const global.browser = await puppeteer.launch({
  headless: false
});
}