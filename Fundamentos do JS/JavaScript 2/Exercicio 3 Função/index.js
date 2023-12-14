function areaTriangulo(a, b) {
  return (a * b) / 2;
}

function areaRetangulo(a, b) {
  return a * b;
}

function areaQuadrado(lado) {
  return lado * lado;
}

function areaTrapezio(baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo(raio, pi = 3.14) {
  return pi * (raio * raio);
}

//Main code
do {
  let a, b, lado, baseMaior, baseMenor, raio, altura;
  opcao = prompt(
    "Digite uma opção: \n1 - Área Triângulo.\n2 - Área Retângulo.\n3 -Área Quadrado.\n4 - Área Trapézio.\n5 - Área Círculo.\n6 - Sair"
  );
  switch (opcao) {
    case "1":
      a = parseInt(prompt("Digite a base: "));
      b = parseInt(prompt("Digite a altura: "));
      alert(areaTriangulo(a, b));
      break;
    case "2":
      a = parseInt(prompt("Digite a base: "));
      b = parseInt(prompt("Digite a altura: "));
      alert(areaRetangulo(a, b));
      break;
    case "3":
      lado = parseInt(prompt("Digite o lado: "));
      alert(areaQuadrado(lado));
      break;
    case "4":
      baseMaior = parseInt(prompt("Digite a base maior: "));
      baseMenor = parseInt(prompt("Digite a base menor: "));
      altura = parseInt(prompt("Digite a altura: "));
      alert(areaTrapezio(baseMaior, baseMenor, altura));
      break;
    case "5":
      raio = parseInt(prompt("Digite o raio: "));
      alert(areaCirculo(raio));
      break;
    case "6":
      break;
    default:
      alert("Digite uma opção valida.");
      break;
  }
} while (opcao != "6");
