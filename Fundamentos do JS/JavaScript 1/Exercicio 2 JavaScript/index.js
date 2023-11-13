/* let carro1 = prompt("Digite o nome do Primeiro carro: ")
let velocidade1 = prompt("Digite a velocidade do Primeiro Veiculo: ")
let carro2 = prompt("Digite o nome do Segundo Carro: ")
let velocidade2 = prompt("Digite a velocidade do Segundo carro: ")

if(velocidade1 > velocidade2) {
    window.alert(carro1 + " é o mais rapido.")
} else if (velocidade2 > velocidade1) {
    window.alert(carro2 + " é o mais rapido")
} else if(velocidade1 == velocidade2) {
    window.alert(carro1 + " e " + carro2 + " tem a mesma velocidade")
}*/

let dano 
let vida_final
let nome_personagem1 = prompt("Digite o nome do Personagem 1: ")
let dano_poder = prompt("Digite o dano do poder: ")
let nome_personagem2 = prompt("Digite o nome do personagem 2: ")
let vida_personagem = prompt("Digite a quantidade de vida do personagem 2: ")
let defesa_personagem = prompt("Digite a quantidade de defesa do personagem 2: ")
let possui_escudo = prompt("Digite se tem um escudo ou não o personagem 2:")
if((dano_poder > defesa_personagem) && (possui_escudo == "nao")) {
     dano = (dano_poder - defesa_personagem)
} else if((dano_poder > defesa_personagem) && (possui_escudo == "sim")) {
     dano = (dano_poder - defesa_personagem) / 2
} else if(dano_poder <= defesa_personagem) {
    dano = 0 
}
vida_final = (vida_personagem - dano)

alert("Personagem 1: " + "\n" + "Nome: "+ nome_personagem1 + "\n" +  "Dano de ataque: " + dano + "\n" + "\n" + "Personagem 2: " + "\n" + "Nome: " + nome_personagem2 + "\n" + "Vida: " + vida_personagem + "\n" + "Defesa: " + defesa_personagem + "\n" + "Tem escudo: " + possui_escudo + "\n" + "Vida Final: " + vida_final)



