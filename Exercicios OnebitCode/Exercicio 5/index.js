let contador = 0;
let opcao;

let nomeNave = prompt("Digite o nome da nave: ");

opcao = parseInt(prompt("Deseja entrar na dobra espacial?\n1 - Sim\n2 - Não"));
if (opcao == 1) {
  contador++;
  while (opcao != 2) {
    opcao = parseInt(prompt("Deseja entrar novamente?\n1 - Sim\n2 - Não"));
    if (opcao == 1) {
      contador++;
    }
  }
}

alert(
  "Nome da nave: " +
    nomeNave +
    "\n" +
    "Numero de vezes que entrou na dobra: " +
    contador
);
