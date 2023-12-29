var jogadorNome;
var jogadorPontos = 0;
var jogadorEscolha = 0;
var computadorEscolha = 0;
var computadorPontos = 0;

function mensagem(texto) {
  document.getElementById("mensagem").innerHTML = texto;
}

function mostrarPontuacaoJogador(pontos) {
  document.getElementById("jogador-pontos").innerHTML = pontos;
}
function mostrarPontuacaoComputador(pontos) {
  document.getElementById("computador-pontos").innerHTML = pontos;
}

function selecionar(tipo, escolha) {
  document
    .getElementById(tipo + "-escolha-" + escolha)
    .classList.add("selecionado");
}
function deselecionar(tipo, escolha) {
  document
    .getElementById(tipo + "-escolha-" + escolha)
    .classList.remove("selecionado");
}

// sorteia entre dois numeros
function sortear(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcularEscolha(jogador, computador) {
  if (jogador == 1 && computador == 1) {
    return 0;
  } else if (jogador == 1 && computador == 2) {
    return 2;
  } else if (jogador == 1 && computador == 3) {
    return 1;
  } else if (jogador == 2 && computador == 1) {
    return 1;
  } else if (jogador == 2 && computador == 2) {
    return 0;
  } else if (jogador == 2 && computador == 3) {
    return 2;
  } else if (jogador == 3 && computador == 1) {
    return 2;
  } else if (jogador == 3 && computador == 2) {
    return 1;
  } else if (jogador == 3 && computador == 3) {
    return 0;
  }
}

function somarPontoJogador() {
  jogadorPontos++;
}
function somarPontoComputador() {
  computadorPontos++;
}

function jogar(escolha) {
  jogadorEscolha = escolha;
  selecionar("jogador", jogadorEscolha);
  computadorEscolha = sortear(1, 3);
  selecionar("computador", computadorEscolha);
  var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);
  if (ganhador == 0) {
    mensagem("Ops, parece que vocês empataram🤭...");
  } else if (ganhador == 1) {
    mensagem(`Parabéns ${jogadorNome}, você ganhou esta rodada😎...`);
    somarPontoJogador();
    mostrarPontuacaoJogador(jogadorPontos);
  } else if (ganhador == 2) {
    mensagem(`Ops ${jogadorNome}, você perdeu esta rodada 😭...`);
    somarPontoComputador();
    mostrarPontuacaoComputador(computadorPontos);
  }

  setTimeout(() => {
    deselecionar("jogador", jogadorEscolha);
    deselecionar("computador", computadorEscolha);
    mensagem(`${jogadorNome}, escolha uma das opções acima para prosseguir.`);
  }, 1500);
}

document.getElementById("jogador-escolha-1").onclick = function () {
  jogar(1);
};
document.getElementById("jogador-escolha-2").onclick = function () {
  jogar(2);
};
document.getElementById("jogador-escolha-3").onclick = function () {
  jogar(3);
};

jogadorNome = prompt(
  "Seja bem vindo ao nosso mini-game\nInsira o nome do jogador."
);

mensagem(
  `Olá ${jogadorNome}, seja bem vindo, escolha uma das opções acima para prosseguir.`
);

document.getElementById("jogador-nome").innerHTML = jogadorNome;
