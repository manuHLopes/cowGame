//carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeDosCarros = [2, 2.5, 4, 5, 2.7, 3.5];
let wCarros = 50;
let hCarros = 40;

function mostraCarro(){
  for(let i = 0; i < imagensDosCarros.length; i++){
    image(imagensDosCarros[i], xCarros[i], yCarros[i], wCarros, hCarros);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagensDosCarros.length; i++){
    xCarros[i] -= velocidadeDosCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagensDosCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return (xCarro < -50);
}