let velocidade = 0;
let nave = {};
let opcao;
nave.nome = prompt("Digite um nome para a nave: ");
nave.tipo = prompt("Digite o tipo da nave: ");
nave.velocidadeMaxima = parseInt(
  prompt("Digite a velocidade maxima da nave: ")
);
do {
  opcao = parseInt(prompt("1 - acelerar\n2 - Parar"));
  if (opcao == 1) {
    let velocidadeNova = parseInt(
      prompt("Para qual velocidade gostaria de acelerar: ")
    );
    velocidade += velocidadeNova;
  } else if (opcao == 2) {
    if (velocidade > nave.velocidadeMaxima) {
      alert(
        "Passou da velocidade maxima.\nNave entrou em combustão\n\nNome da nave: " +
          nave.nome +
          "\n" +
          "Tipo da nave: " +
          nave.tipo +
          "\n" +
          "Velocidade maxima: " +
          nave.velocidadeMaxima +
          " km/h" +
          "\n" +
          "Velocidade atual: " +
          velocidade +
          " km/h"
      );
    } else if (velocidade <= nave.velocidadeMaxima) {
      alert(
        "Nome da nave: " +
          nave.nome +
          "\n" +
          "Tipo da nave: " +
          nave.tipo +
          "\n" +
          "Velocidade maxima: " +
          nave.velocidadeMaxima +
          " km/h" +
          "\n" +
          "Velocidade atual: " +
          velocidade +
          " km/h"
      );
    }
    break;
  }
} while (opcao != 3);
