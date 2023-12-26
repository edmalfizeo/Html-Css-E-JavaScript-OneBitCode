const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

//Nomes naves
function pegarNomes() {
  let apenasNomes = [];
  for (let i = 0; i < 5; i++) {
    apenasNomes.push(" " + hitchedSpaceships[i][0]);
  }
  return apenasNomes;
}

let nomes = pegarNomes();

//Indice do engatamento pendente
function engatePendente() {
  return hitchedSpaceships.findIndex(function (spaceship) {
    return spaceship[2] == false;
  });
}

let numeroEngate = engatePendente();

//Nome Naves com mais de 9 tripulantes
function nave9mais() {
  let nomes9mais = [];
  for (let i = 0; i < 5; i++) {
    if (hitchedSpaceships[i][1] > 9) {
      nomes9mais.push(hitchedSpaceships[i][0]);
    }
  }
  return nomes9mais;
}

let nomesNave9Mais = nave9mais();

//Exibir
alert(
  "Nomes das naves: " +
    nomes +
    "\n" +
    "\n" +
    "Numero da primeira nave com engatamento pendente: " +
    (numeroEngate + 1) +
    "\n" +
    "\n" +
    "Naves com mais de 9 Tripulantes: " +
    nomesNave9Mais
);
