'use strict';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.exibir-menu-sandwiche').addEventListener('click', function (event) {
    event.preventDefault();

    let menu = document.querySelector('.exibir-itens-menu');
    let imagemPerfil = document.querySelector('.img-profile');
    let imagemBandeiras = document.querySelector('.gtranslate_wrapper');
    let menuFechar = document.querySelector('.menu-fechar');
    let menuSandwiche = document.querySelector('.exibir-menu-sandwiche');

    if (menu.classList.contains('display-block')) {
        menu.classList.remove('display-block');
        menuFechar.classList.remove('display-block');
        _exibirImagemPerfil(imagemPerfil);
        _exibirFlagsDeTraducoesDeIdiomas(imagemBandeiras);
        _exibirMenuSandwiche(menuSandwiche);
    } else {
        menu.classList.add('display-block');
        menuFechar.classList.add('display-block');
        _ocultarImagemPerfil(imagemPerfil);
        _ocultarFlagsDeTraducoesDeIdiomas(imagemBandeiras);
        _ocultarMenuSandwiche(menuSandwiche);
    }
  });
});

function _ocultarFlagsDeTraducoesDeIdiomas(imagemBandeiras) {
  let listaDeBandeiras = imagemBandeiras.querySelectorAll('a');
  for (let bandeiras of listaDeBandeiras) {
      bandeiras.hidden = true;
  }
}

function _exibirFlagsDeTraducoesDeIdiomas(imagemBandeiras) {
  let listaDeBandeiras = imagemBandeiras.querySelectorAll('a');
  for (let bandeiras of listaDeBandeiras) {
    bandeiras.hidden = false;
  }
}

let _exibirImagemPerfil = function (imagemPerfil) {
  imagemPerfil.hidden = false;
}

let _ocultarImagemPerfil = function (imagemPerfil) {
  imagemPerfil.hidden = true;
}

function _exibirMenuSandwiche(menuSandwiche){
  menuSandwiche.hidden = false;
};   

function _ocultarMenuSandwiche(menuSandwiche){
  menuSandwiche.hidden = true;
};  
