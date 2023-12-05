function dobro(x) {
    console.log("\nO dobro de " + x + " é " + (x * 2));
}

dobro(5);
dobro(7);

function dizerOla(nome = "Noob") {
    console.log("\nOlá, " + nome + "!");
}
dizerOla("Eduardo");
dizerOla();

function soma(a, b) {
    console.log("\nO Resultado da soma é " + (a + b) + "\n");
}

soma(10, 5);

function criarUsuario(nome, email, senha, tipo = "Admin") {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    
    console.log(usuario)
}

// Deixar parametros com valor original no final, para nao atrapalhar na hora de inserir dados
function novoUsuario(nome,tipo = "Admin", email, senha) {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    
    console.log(usuario)
}


criarUsuario("Eduardo", "eduardo@gmail.com","1234");
//console.log("\n");
//novoUsuario("Eduardo","Admin", "eduardo@gmail.com","1234")

function objetoComoParametro(usuario) {
    console.log("\nNome: " + usuario.nome + "\n" +
    "Email: " + usuario.email + "\n" +
    "Senha: " + usuario.senha + "\n" +
    "Telefone: " + usuario.telefone + "\n" +
    "Endereço: " + usuario.endereco + "\n" +
    "Aniversario: " + usuario.aniversario
)};

const dadosDoUsuario = {
    nome: "Eduardo",
    telefone: "12345678",
    email: "eduardo@gmail.com",
    senha: "1234",
    endereco: "Rua não interessa",
    aniversario: "16102003"
};

objetoComoParametro(dadosDoUsuario);