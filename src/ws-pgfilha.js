/**
 * Objetivo
 * linkimg:
 * datapublicacao:
 * texto:
 */

const axios = require('axios');
const cheerio = require('cheerio');

const urlfilho = 'https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/2023/04/governo-federal-garante-repasse-adicional-de-r-2-bilhoes-para-assegurar-assistencia-em-entidades-filantropicas';

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