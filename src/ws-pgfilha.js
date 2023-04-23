/**
 * Objetivo
 * linkimg:
 * datapublicacao:
 * texto:
 */

const axios = require('axios');
const cheerio = require('cheerio');

const urlfilho = 'teste';

axios.get(urlfilho)
.then(resp=>{
    const dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    const titulo = $('h1').text();
    const linkimg = $('img').attr('src');
    const datapublicacao = $('span[class="value"]').text();
    const texto = $('div[property="rnews:articleBody"]').text();

    const dados = {titulo,linkimg,datapublicacao,texto};
    console.log(dados);
})