let nomeNav = prompt("Digite o nome da nave: ");

let indiceCaractere = prompt("Digite o caractere que quer substitiur: ");

let subCaractere = prompt("Digite por qual caractere você quer substituir: ");

let novoCaractere = "";

for (let i = 0; i < nomeNav.length; i++) {
  if (nomeNav[i] == indiceCaractere) {
    novoCaractere += subCaractere;
  } else {
    novoCaractere += nomeNav[i];
  }
}

alert("Novo nome: " + novoCaractere);
