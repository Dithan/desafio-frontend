//MENU MOBILE
const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu() {
  const nav = document.querySelector('.nav-header');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

//API BANNER

fetch('https://labs.inforcedata.com.br/desafio-frontend/banners.json')
  .then((resposta) => {
    return resposta.json();
  })
  .then((corpo) => {
    //Img Banner

    let img1 = corpo[0].imagem;
    let img2 = corpo[1].imagem;

    let banner1 = document.getElementById('banner1');
    banner1.setAttribute('src', img1);

    let banner2 = document.getElementById('banner2');
    banner2.setAttribute('src', img2);

    //Texto

    let titulo1 = corpo[0].titulo;
    let titulo2 = corpo[1].titulo;

    let texto1 = document.getElementById('texto1');
    texto1.innerHTML = `<i>${titulo1}</i>`;
    let texto2 = document.getElementById('texto2');
    texto2.innerHTML = `<i>${titulo2}</i>`;

    // Link do Botão Banner

    let imgLink1 = corpo[0].call_to_action;
    let imgLink2 = corpo[1].call_to_action;

    let bannerButton1 = document.getElementById('banner-button1');
    bannerButton1.setAttribute('src', imgLink1);

    let bannerButton2 = document.getElementById('banner-button1');
    bannerButton2.setAttribute('src', imgLink2);
  });

fetch('https://labs.inforcedata.com.br/desafio-frontend/vitrines.json')
  .then((resposta) => {
    return resposta.json();
  })
  .then((corpo) => {
    let capa0 = corpo[0].capa;
    let tipo0 = corpo[0].tipo;
    let bairro0 = corpo[0].bairro;
    let quartos0 = corpo[0].quartos;
    let vagas0 = corpo[0].vagas;
    let metragem0 = corpo[0].metragem;

    let imgImovel0 = document.getElementById('capa0');
    imgImovel0.setAttribute('src', capa0);

    let tipoImovel0 = document.getElementById('tipo0');
    tipoImovel0.innerHTML = `<i>${tipo0}</i>`;

    let bairroImovel0 = document.getElementById('bairro0');
    bairroImovel0.innerHTML = `<i>${bairro0}</i>`;

    let quartosImovel0 = document.getElementById('quartos0');
    quartosImovel0.innerHTML = `<i>${quartos0}</i>`;

    let vagasImovel0 = document.getElementById('vagas0');
    vagasImovel0.innerHTML = `<i>${vagas0}</i>`;

    let metragemImovel0 = document.getElementById('metragem0');
    metragemImovel0.innerHTML = `<i>${metragem0}m²</i>`;

    //imovel1

    let capa1 = corpo[1].capa;
    let tipo1 = corpo[1].tipo;
    let bairro1 = corpo[1].bairro;
    let quartos1 = corpo[1].quartos;
    let vagas1 = corpo[1].vagas;
    let metragem1 = corpo[1].metragem;

    let imgImovel1 = document.getElementById('capa1');
    imgImovel1.setAttribute('src', capa1);

    let tipoImovel1 = document.getElementById('tipo1');
    tipoImovel1.innerHTML = `<i>${tipo1}</i>`;

    let bairroImovel1 = document.getElementById('bairro1');
    bairroImovel1.innerHTML = `<i>${bairro1}</i>`;

    let quartosImovel1 = document.getElementById('quartos1');
    quartosImovel1.innerHTML = `<i>${quartos1}</i>`;

    let vagasImovel1 = document.getElementById('vagas1');
    vagasImovel1.innerHTML = `<i>${vagas1}</i>`;

    let metragemImovel1 = document.getElementById('metragem1');
    metragemImovel1.innerHTML = `<i>${metragem1}m²</i>`;

    //imovel2

    let capa2 = corpo[2].capa;
    let tipo2 = corpo[2].tipo;
    let bairro2 = corpo[2].bairro;
    let quartos2 = corpo[2].quartos;
    let vagas2 = corpo[2].vagas;
    let metragem2 = corpo[2].metragem;

    let imgImovel2 = document.getElementById('capa2');
    imgImovel2.setAttribute('src', capa2);

    let tipoImovel2 = document.getElementById('tipo2');
    tipoImovel2.innerHTML = `<i>${tipo2}</i>`;

    let bairroImovel2 = document.getElementById('bairro2');
    bairroImovel2.innerHTML = `<i>${bairro2}</i>`;

    let quartosImovel2 = document.getElementById('quartos2');
    quartosImovel2.innerHTML = `<i>${quartos2}</i>`;

    let vagasImovel2 = document.getElementById('vagas2');
    vagasImovel2.innerHTML = `<i>${vagas2}</i>`;

    let metragemImovel2 = document.getElementById('metragem2');
    metragemImovel2.innerHTML = `<i>${metragem2}m²</i>`;

    //imovel3

    let capa3 = corpo[3].capa;
    let tipo3 = corpo[3].tipo;
    let bairro3 = corpo[3].bairro;
    let quartos3 = corpo[3].quartos;
    let vagas3 = corpo[3].vagas;
    let metragem3 = corpo[3].metragem;

    let imgImovel3 = document.getElementById('capa3');
    imgImovel3.setAttribute('src', capa3);

    let tipoImovel3 = document.getElementById('tipo3');
    tipoImovel3.innerHTML = `<i>${tipo3}</i>`;

    let bairroImovel3 = document.getElementById('bairro3');
    bairroImovel3.innerHTML = `<i>${bairro3}</i>`;

    let quartosImovel3 = document.getElementById('quartos3');
    quartosImovel3.innerHTML = `<i>${quartos3}</i>`;

    let vagasImovel3 = document.getElementById('vagas3');
    vagasImovel3.innerHTML = `<i>${vagas3}</i>`;

    let metragemImovel3 = document.getElementById('metragem3');
    metragemImovel3.innerHTML = `<i>${metragem3}m²</i>`;

    //imovel4

    let capa4 = corpo[4].capa;
    let tipo4 = corpo[4].tipo;
    let bairro4 = corpo[4].bairro;
    let quartos4 = corpo[4].quartos;
    let vagas4 = corpo[4].vagas;
    let metragem4 = corpo[4].metragem;

    let imgImovel4 = document.getElementById('capa4');
    imgImovel4.setAttribute('src', capa4);

    let tipoImovel4 = document.getElementById('tipo4');
    tipoImovel4.innerHTML = `<i>${tipo4}</i>`;

    let bairroImovel4 = document.getElementById('bairro4');
    bairroImovel4.innerHTML = `<i>${bairro4}</i>`;

    let quartosImovel4 = document.getElementById('quartos4');
    quartosImovel4.innerHTML = `<i>${quartos4}</i>`;

    let vagasImovel4 = document.getElementById('vagas4');
    vagasImovel4.innerHTML = `<i>${vagas4}</i>`;

    let metragemImovel4 = document.getElementById('metragem4');
    metragemImovel4.innerHTML = `<i>${metragem4}m²</i>`;

    //imovel5

    let capa5 = corpo[5].capa;
    let tipo5 = corpo[5].tipo;
    let bairro5 = corpo[5].bairro;
    let quartos5 = corpo[5].quartos;
    let vagas5 = corpo[5].vagas;
    let metragem5 = corpo[5].metragem;

    let imgImovel5 = document.getElementById('capa5');
    imgImovel5.setAttribute('src', capa5);

    let tipoImovel5 = document.getElementById('tipo5');
    tipoImovel5.innerHTML = `<i>${tipo5}</i>`;

    let bairroImovel5 = document.getElementById('bairro5');
    bairroImovel5.innerHTML = `<i>${bairro5}</i>`;

    let quartosImovel5 = document.getElementById('quartos5');
    quartosImovel5.innerHTML = `<i>${quartos5}</i>`;

    let vagasImovel5 = document.getElementById('vagas5');
    vagasImovel5.innerHTML = `<i>${vagas5}</i>`;

    let metragemImovel5 = document.getElementById('metragem5');
    metragemImovel5.innerHTML = `<i>${metragem5}m²</i>`;
  });

//API ULTIMAS NOTÍCIAS

fetch('https://labs.inforcedata.com.br/desafio-frontend/noticias.json')
  .then((resposta) => {
    return resposta.json();
  })
  .then((corpo) => {
    //NOTÍCIA 0

    let capaNoticia0 = corpo[0].capa;
    let tituloNoticia0 = corpo[0].titulo;
    let sumarioNoticia0 = corpo[0].sumario;

    let imgNoticia0 = document.getElementById('capa-noticia0');
    imgNoticia0.setAttribute('src', capaNoticia0);

    let tituloN0 = document.getElementById('titulo0');
    tituloN0.innerHTML = `<i>${tituloNoticia0}</i>`;

    let sumarioN0 = document.getElementById('sumario0');
    sumarioN0.innerHTML = `<i>${sumarioNoticia0}</i>`;

    //NOTÍCIA 1

    let capaNoticia1 = corpo[1].capa;
    let tituloNoticia1 = corpo[1].titulo;
    let sumarioNoticia1 = corpo[1].sumario;

    let imgNoticia1 = document.getElementById('capa-noticia1');
    imgNoticia1.setAttribute('src', capaNoticia1);

    let tituloN1 = document.getElementById('titulo1');
    tituloN1.innerHTML = `<i>${tituloNoticia1}</i>`;

    let sumarioN1 = document.getElementById('sumario1');
    sumarioN1.innerHTML = `<i>${sumarioNoticia1}</i>`;

    //NOTÍCIA 2

    let capaNoticia2 = corpo[2].capa;
    let tituloNoticia2 = corpo[2].titulo;
    let sumarioNoticia2 = corpo[2].sumario;

    let imgNoticia2 = document.getElementById('capa-noticia2');
    imgNoticia2.setAttribute('src', capaNoticia2);

    let tituloN2 = document.getElementById('titulo2');
    tituloN2.innerHTML = `<i>${tituloNoticia2}</i>`;

    let sumarioN2 = document.getElementById('sumario2');
    sumarioN2.innerHTML = `<i>${sumarioNoticia2}</i>`;

    //NOTÍCIA 3

    let capaNoticia3 = corpo[3].capa;
    let tituloNoticia3 = corpo[3].titulo;
    let sumarioNoticia3 = corpo[3].sumario;

    let imgNoticia3 = document.getElementById('capa-noticia3');
    imgNoticia3.setAttribute('src', capaNoticia3);

    let tituloN3 = document.getElementById('titulo3');
    tituloN3.innerHTML = `<i>${tituloNoticia3}</i>`;

    let sumarioN3 = document.getElementById('sumario3');
    sumarioN3.innerHTML = `<i>${sumarioNoticia3}</i>`;
  });

//API MAIS ACESSADOS

fetch('https://labs.inforcedata.com.br/desafio-frontend/cloudtags.json')
  .then((resposta) => {
    return resposta.json();
  })
  .then((corpo) => {
    //MAIS ACESSADOS 0

    let linkAcessados0 = corpo[0].link;
    let tagAcessados0 = corpo[0].tag;

    let tagA0 = document.getElementById('acessados0');
    tagA0.innerHTML = `<i>${tagAcessados0}</i>`;

    //MAIS ACESSADOS 1

    let linkAcessados1 = corpo[1].link;
    let tagAcessados1 = corpo[1].tag;

    let tagA1 = document.getElementById('acessados1');
    tagA1.innerHTML = `<i>${tagAcessados1}</i>`;

    //MAIS ACESSADOS 2

    let linkAcessados2 = corpo[2].link;
    let tagAcessados2 = corpo[2].tag;

    let tagA2 = document.getElementById('acessados2');
    tagA2.innerHTML = `<i>${tagAcessados2}</i>`;

    //MAIS ACESSADOS 3

    let linkAcessados3 = corpo[3].link;
    let tagAcessados3 = corpo[3].tag;

    let tagA3 = document.getElementById('acessados3');
    tagA3.innerHTML = `<i>${tagAcessados3}</i>`;

    //MAIS ACESSADOS 4

    let linkAcessados4 = corpo[4].link;
    let tagAcessados4 = corpo[4].tag;

    let tagA4 = document.getElementById('acessados4');
    tagA4.innerHTML = `<i>${tagAcessados4}</i>`;

    //MAIS ACESSADOS 5

    let linkAcessados5 = corpo[5].link;
    let tagAcessados5 = corpo[5].tag;

    let tagA5 = document.getElementById('acessados5');
    tagA5.innerHTML = `<i>${tagAcessados5}</i>`;

    //MAIS ACESSADOS 6

    let linkAcessados6 = corpo[6].link;
    let tagAcessados6 = corpo[6].tag;

    let tagA6 = document.getElementById('acessados6');
    tagA6.innerHTML = `<i>${tagAcessados6}</i>`;
  });
