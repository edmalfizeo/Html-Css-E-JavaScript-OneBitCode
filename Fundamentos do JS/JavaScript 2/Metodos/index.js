let pessoa = {
    nome: "Eduardo",
    idade: 20,
    dizerOla() {
        console.log("Olá, Mundo! Meu nome é " + this.nome);
    }
}

console.log(pessoa);
pessoa.dizerOla();
console.log(pessoa.nome);
//this utilizado para referenciar algo do objeto
