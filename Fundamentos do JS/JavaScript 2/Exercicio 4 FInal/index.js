let opcao;
let vagas = [];
let nomeCandidato;
let indiceVaga;
let candidato;
let excluir;

do {
  opcao = parseInt(
    prompt(
      "1 - Listar vagas\n2 - Criar vaga\n3 - Visualizar uma vaga\n4 - Inscrever um candidato a uma vaga\n5 - Excluir uma vaga\n6 - Sair\n\nDigite uma opção: "
    )
  );

  switch (opcao) {
    case 1:
      verVagas();
      break;
    case 2:
      criarVaga();
      break;
    case 3:
      verVagaUnica();
      break;
    case 4:
      inscreverCandidato();
      break;
    case 5:
      excluirVaga();
      break;
    case 6:
      break;
    default:
      alert("Opção invalida");
  }
} while (opcao != 6);

//  FUNÇÕES ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Mostrar vagas Criadas
function verVagas() {
  for (let i = 0; i < vagas.length; i++) {
    alert(
      "Vaga: " +
        i +
        "\n" +
        "Nome da vaga: " +
        vagas[i].nome +
        "\n" +
        "Quantidade de candidatos: " +
        vagas[i].nomeC.length +
        "\n" +
        "Nomes Canditatos: " +
        vagas[i].nomeC
    );
  }
}

//Criar vagas
function criarVaga() {
  nomeVaga = prompt("Digite um nome para a vaga: ");
  descricao = prompt("Digite a descrição para a vaga: ");
  dataLimite = prompt("Digite a data limite para a vaga: ");

  var vagasObjeto = {
    nome: nomeVaga,
    descricaoVaga: descricao,
    data: dataLimite,
    nomeC: (nomeCandidato = []),
  };

  estaCerto = prompt(
    "Vaga: " +
      vagasObjeto.nome +
      "\n" +
      "Descrição: " +
      vagasObjeto.descricaoVaga +
      "\n" +
      "Data Limite: " +
      vagasObjeto.data +
      "\n" +
      "Esta Correto\nSim ou Não: "
  );

  if (estaCerto === "Sim" || estaCerto === "sim") {
    vagas.push(vagasObjeto);
  } else {
    alert("Crie novamente.");
  }
}

// Ver Vaga Especifica
function verVagaUnica() {
  indiceVaga = parseInt(prompt("Digite o numero da vaga que deseja ver: "));
  alert(
    "Numero da Vaga: " +
      indiceVaga +
      "\n" +
      "Nome da vaga: " +
      vagas[indiceVaga].nome +
      "\n" +
      "Descrição: " +
      vagas[indiceVaga].descricaoVaga +
      "\n" +
      "Data Limite: " +
      vagas[indiceVaga].data +
      "\n" +
      "Numero de candidatos: " +
      vagas[indiceVaga].nomeC.length +
      "\n" +
      "Nome dos candidatos: " +
      vagas[indiceVaga].nomeC
  );
}

function inscreverCandidato() {
  indiceVaga = prompt(
    "Digite o Numero da vaga que deseja adicionar o candidato: "
  );
  candidato = prompt("Digite o Nome do candidato: ");
  estaCerto2 = prompt(
    "Numero da Vaga: " +
      indiceVaga +
      "\n" +
      "Nome da vaga: " +
      vagas[indiceVaga].nome +
      "\n" +
      "Descrição: " +
      vagas[indiceVaga].descricaoVaga +
      "\n" +
      "Data Limite: " +
      vagas[indiceVaga].data +
      "\n" +
      "Esta certo?\nSim ou Não:"
  );
  if (estaCerto2 === "Sim" || estaCerto2 === "sim") {
    vagas[indiceVaga].nomeC.push(candidato);
  }
}

function excluirVaga() {
  indiceVaga = prompt("Digite o numero da vaga que será excluida: ");
  excluir = prompt(
    "Nome da vaga: " +
      vagas[indiceVaga].nome +
      "\n" +
      "Descrição: " +
      vagas[indiceVaga].descricaoVaga +
      "\n" +
      "Data Limite: " +
      vagas[indiceVaga].data +
      "\n" +
      "Deseja Excluir?\nSim ou Não:"
  );
  if (estaCerto2 === "Sim" || estaCerto2 === "sim") {
    vagas.splice(indiceVaga, 1);
  } else {
    alert("A Vaga não foi excluida.");
  }
}
