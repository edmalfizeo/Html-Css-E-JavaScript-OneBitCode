const valorMetros = prompt("Digite o valor em metros:")
const medidaConversao = prompt(
  "Qual a medida para conversão?\n 1-milímetro(mm) \n 2-centímetro(cm) \n 3-decímetro(dm) \n 4-decâmetro(dam) \n 5-hectômetro(hm) \n 6-quilômetro(km)"
);

const medidaConversaoNumero = parseFloat(medidaConversao)
let resultado = 0


switch(medidaConversaoNumero) {
    case 1:
        const milimetro = (valorMetros * 1000) + " Milímetros."
        resultado = milimetro
        break
    case 2:
        const centimetro = valorMetros * 100 + " Centímetros."
        resultado = centimetro
        break
    case 3:
        const decimetro = valorMetros * 10 + " Decímetros."
        resultado = decimetro
        break
    case 4:
        const decametro = valorMetros / 10 + " Decâmetros."
        resultado = decametro
        break
    case 5:
        const hectometro = valorMetros / 100 + " Hectômetro."
        resultado = hectometro
        break
    case 6:
        const quilometro = valorMetros / 1000 + " Quilômetros."
        resultado = quilometro
        break
    default:
        alert("Opção invalida.")    
}
document.body.innerHTML = "<h1> Valor Convertido: " + resultado + "</h1>"