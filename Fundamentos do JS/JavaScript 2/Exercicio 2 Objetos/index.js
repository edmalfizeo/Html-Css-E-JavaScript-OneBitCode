let imoveis = [];
let opcao = "";

do {
    opcao = prompt("Total de imoveis: "+ imoveis.length +"\nDigite uma opção:\n1 - Cadastrar um imovel.\n2 - Listar Imoveis.\n3 - Encerrar");

    switch(opcao) {
        case "1":
            const imovel = {};

            imovel.proprietario = prompt("Digite o nome do proprietario: ");
            imovel.quartos = prompt("Digite a quantidade de quartos: ");
            imovel.banheiros = prompt("Digite a quantidade de banheiros: ");
            imovel.garagem = prompt("Tem garagem? ");

            imoveis.push(imovel);
            break;
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert("Imoveis: " + (i + 1) + "\n" + 
                "Proprietario: " + imoveis[i].proprietario + "\n" +
                "Quartos: " + imoveis[i].quartos + "\n" +
                "Banheiros: " + imoveis[i].banheiros + "\n" +
                "Tem garagem: " + imoveis[i].garagem);
            }
        case "3":
            break;
        case "4":
            break;            
    }
}while(opcao !== "3");