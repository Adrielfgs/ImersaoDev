var carta1 = {
    nome: "Yoda",
    atributos: {
        ataque: 8,
        defesa: 6,
        magia: 10
    }
};

var carta2 = {
    nome: "Darth Vader",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 9
    }
}

var carta3 = {
    nome: "Chewbacca",
    atributos: {
        ataque: 5,
        defesa: 5,
        magia: 3
    }
};

var carta4 = {
    nome: "Stormtrooper",
    atributos: {
        ataque: 6,
        defesa: 3,
        magia: 2
    }
};

var carta5 = {
    nome: "Mandalorian",
    atributos: {
        ataque: 7,
        defesa: 9,
        magia: 4
    }
};

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  console.log(cartaMaquina);
}
