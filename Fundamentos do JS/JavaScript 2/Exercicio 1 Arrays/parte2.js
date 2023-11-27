let baralho = [],
  adicionar,
  remover;
do {
  let cartas = "";
  for (let i = 0; i < baralho.length; i++) {
    cartas += i + 1 + ": " + baralho[i] + "\n";
  }

  opcao = prompt(
    "Cartas: " +
      cartas +
      "\nDigite uma opção:\n1 - Adicionar carta.\n2 - Remover carta.\n3 - Sair."
  );

  switch (opcao) {
    case "1":
      let nome = prompt("Digite o nome da carta: ");
      adicionar = baralho.push(nome);
      break;
    case "2":
      remover = baralho.pop();
      alert("A carta removida foi: " + remover);
      break;
    case "3":
      break;
    default:
      alert("Opção invalida.");
  }

  
} while (opcao != "3");
