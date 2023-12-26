//Main
let velocidade = 0;
let nomeNav = prompt("Digite o nome da nave: ");
let opcao = prompt(
  "Deseja entrar no programa da nave:\n1 - Sim\n2 - Não\nDigite uma opção:"
);
if (opcao == 1) {
  menu(opcao);
} else {
  alert("Encerrando.");
}

//Functions
function menu(opcao) {
  while (opcao != "4") {
    opcao = prompt(
      "1 - Acelerar 5km\n2 - Desacelerar 5km\n3 - Dados de bordo\n4 - Sair\nDigite uma opção:"
    );
    switch (opcao) {
      case "1":
        acelerar();
        break;
      case "2":
        desacelerar();
        break;
      case "3":
        dadosDeBordo(nomeNav, velocidade);
        break;
      case "4":
        break;
      default:
        alert("Opção invalida.");
        break;
    }
  }
}

function acelerar() {
  velocidade += 5;
}

function desacelerar() {
  if (velocidade > 0) {
    velocidade -= 5;
  } else {
    velocidade = 1;
  }
}

function dadosDeBordo(nomeNav, velocidade) {
  if (velocidade <= 0) {
    velocidade = 1;
  }
  alert(
    "Nome da nave: " +
      nomeNav +
      "\n" +
      "Velocidade atual: " +
      velocidade +
      " km/h"
  );
}
