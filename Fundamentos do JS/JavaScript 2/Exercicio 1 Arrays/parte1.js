let nome,
  adicionar,
  remover,
  fila = [],
  opcao;

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "° " + fila[i] + "\n";
  }

  opcao = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma opção:\n1 - Novo Paciente.\n2 - Consultar paciente\n 3 - Sair"
  );

  switch (opcao) {
    case "1":
      nome = prompt("Digite o nome do Paciente: ");
      fila.push(nome);
      break;
    case "2":
      remover = fila.shift();
      alert(remover + " Foi removido da fila.");
    case "3":
      break;
  }
} while (opcao != 3);
