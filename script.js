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
