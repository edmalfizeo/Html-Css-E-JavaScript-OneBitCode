let distancia = prompt("Digite a distancia em anos luz: ");
let base = parseInt(
  prompt(
    "Digite o numero da base que deseja fazer a conversão:\n1 - Parsec(pc)\n2 - Unidade astronônima(AU)\n3 - Quilometros(km)"
  )
);
let distanciaParsec, distanciaUnidadeAstrononima, distanciaQuilometros;
switch (base) {
  case 1:
    distanciaParsec = distancia * 0.306601;
    alert(
      "Distancia em anos luz: " +
        distancia +
        "\n" +
        "Distancia em Parsec: " +
        distanciaParsec
    );
    break;
  case 2:
    distanciaUnidadeAstrononima = distancia * 63241.1;
    alert(
      "Distancia em anos luz: " +
        distancia +
        "\n" +
        "Distancia em Unidade Astronônima: " +
        distanciaUnidadeAstrononima
    );
    break;
  case 3:
    distanciaQuilometros = distancia * (9.5 * Math.pow(10, 12));
    alert(
      "Distancia em anos luz: " +
        distancia +
        "\n" +
        "Distancia em Quilometros: " +
        distanciaQuilometros
    );
    break;
  default:
    alert("Unidade de conversão nao reconhecida");
}
