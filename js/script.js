let ordem = [];
let ordemDosCliques = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

// A ordem aleatória das cores é gerada aqui
let embaralharOrdemDasCores = () => {
  let ordemDaCor = Math.floor(Math.random() * 4);
  ordem[ordem.length] = ordemDaCor;
  ordemDosCliques = [];

  for (let i in ordem) {
    let corDoElemento = criarCorDoElemento(ordem[i]);
    acenderProximaCor(corDoElemento, Number(i) + 1);
  }
};

acenderProximaCor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

// Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checarOrdemDasCores = () => {
  for (let i in ordemDosCliques) {
    if (ordemDosCliques[i] != ordem[i]) {
      gameOver();
      break;
    }
  }
  if (ordemDosCliques.length == ordem.length) {
    alert(`Pontuação: ${score}\nVocê acertou! \nIniciando próximo nível.`);
    proximoNivel();
  }
};

let clickDoUsuario = (cor) => {
  ordemDosCliques[ordemDosCliques.length] = cor;
  criarCorDoElemento(cor).classList.add("selected");

  setTimeout(() => {
    criarCorDoElemento(cor).classList.remove("selected");
    checarOrdemDasCores();
  }, 250);
};

let criarCorDoElemento = (cor) => {
  if (cor == 0) {
    return green;
  } else if (cor == 1) {
    return red;
  } else if (cor == 2) {
    return yellow;
  } else if (cor == 3) {
    return blue;
  }
};

let proximoNivel = () => {
  score++;
  embaralharOrdemDasCores();
};

let gameOver = () => {
  alert(
    `Pontuação: ${score}\nVocê perdeu o jogo! \nClique em OK para iniciar um novo jogo`
  );
  ordem = [];
  ordemDosCliques = [];

  playGame();
};

// Função para o inicio do jogo
let playGame = () => {
  alert("Bem-vindo ao Genius! \nIniciando um novo jogo!");
  score = 0;

  proximoNivel();
};

// Eventos de clique para as cores
green.onclick = () => clickDoUsuario(0);
red.onclick = () => clickDoUsuario(1);
yellow.onclick = () => clickDoUsuario(2);
blue.onclick = () => clickDoUsuario(3);

// Inicia o jogo
playGame();
