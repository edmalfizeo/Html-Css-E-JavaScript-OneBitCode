const array = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(array)

//adicionar elementos
// push
let tamanho = array.push("Boromir")
console.log(array)
console.log(tamanho)

// unshift
tamanho = array.unshift("teste")
console.log(array)
console.log(tamanho)

//Remover elementos
// pop
let ultimoElemento = array.pop()
console.log(array)
console.log(ultimoElemento)

// shift
ultimoElemento = array.shift()
console.log(array)
console.log(ultimoElemento)

// Pesquisar por um elemento
//parei na parte 10:39 do video Trabalhando com array parte 1