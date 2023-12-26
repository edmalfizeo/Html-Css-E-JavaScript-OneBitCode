let velocidade = 150;

function desacelerar() {
  while (velocidade > 0) {
    alert("Velocidade atual: " + velocidade);
    velocidade -= 20;
  }
}

function dadosNave() {
  desacelerar();
  if (velocidade <= 0) {
    velocidade = 0;
  }
  alert(
    "Velocidade: " + velocidade + "\n" + "Nave Parada, Portas foram abertas."
  );
}

dadosNave();
