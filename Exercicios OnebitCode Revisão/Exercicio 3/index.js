let nome = prompt("Digite o nome do piloto: ");
let velocidade = 0;
let definirVelocidade = prompt(
  "Digite a velocidade que quer acelerar a nave: "
);
let confirmar = prompt(
  "A velocidade esta indo para: " +
    definirVelocidade +
    " Deseja confirmar?\nSim ou Não?"
);
if (confirmar == "Sim" || confirmar == "sim") {
  velocidade = definirVelocidade;
}

if (velocidade <= 0) {
  alert("Nave esta parada. Considere partir e aumentar a velocidade.");
}
if (velocidade > 0 && velocidade < 40) {
  alert("Você está devagar,podemos aumentar mais.");
}
if (velocidade >= 40 && velocidade <= 80) {
  alert("Parece uma boa velocidade para manter");
}
if (velocidade > 80 && velocidade < 100) {
  alert("Velocidade alta. Considere diminuir");
}
if (velocidade >= 100) {
  alert("Velocidade perigosa. Controle automático forçado");
}

alert("Nome do piloto: " + nome + "\n" + "Velocidade: " + velocidade);
