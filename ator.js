// ator

let yAtor = 366;
let xAtor = 100;
let dAtor = 30;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
}

function houveColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagensDosCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], wCarros, hCarros, xAtor, yAtor, 15);
    if (colisao){
      voltaPosicaoInicialAtor();
      somColidiu.play();
      if(pontosMaiorQueZero()){
        meusPontos--;
      }
    }
  }
}

function voltaPosicaoInicialAtor(){
  xAtor = 100;    
  yAtor = 366;
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,160));
  text(meusPontos, width/5, 27);
}

function contaPontos(){
  if(yAtor < 15){
    meusPontos++;
    somPontos.play();
    voltaPosicaoInicialAtor();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}