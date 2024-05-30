// imagens

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

// sons
let colidiu;
let pontos;
let trilha;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemDoCarro = loadImage("imagens/carro-1.png");
    imagemDoCarro2 = loadImage("imagens/carro-2.png");
    imagemDoCarro3 = loadImage("imagens/carro-3.png");
    
    //listagem dos carros
    imagensDosCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3];
  
    //sons
    somColidiu = loadSound("sons/colidiu.mp3");
    somPontos = loadSound("sons/pontos.wav");
    somTrilha = loadSound("sons/trilha.mp3");
}