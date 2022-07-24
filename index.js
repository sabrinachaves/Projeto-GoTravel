const criarReserva = require("./criar-reserva");
const deletarReserva = require("./deletar-reserva");
const acessarReservas = require("./todas-as-reservas");
const lerReserva = require("./ler-reserva");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(
    `\nOlá, seja bem-vindo(a) ao GoTravel!
    ------------------------------------------------------------
    Processo: ${process.pid}
    Plataforma: ${process.platform}
    Arquitetura: ${process.arch}
    ------------------------------------------------------------\n`
);

async function pergunta(texto) {
    return new Promise(resolve => {
        rl.question(`${texto}\n`, resolve);
    })
}

rl.setPrompt(
    `Escolha uma das opções abaixo, digitando o número correspondente:
    1 - Criar reserva
    2 - Ler reserva por CPF
    3 - Ler todas as reservas
    4 - Deletar reserva
    5 - Atualizar reserva
    6 - Sair\n`
);

rl.prompt();

rl.on('line', async (opcao) => {
    switch (opcao) {
        case "1":
            {
                const nome = await pergunta("Digite o nome completo: ");
                const cpf = await pergunta("Digite o seu cpf: ");
                const data = await pergunta("Digite a data da viagem: ");
                const origem = await pergunta("Digite a origem: ");
                const destino = await pergunta("Digite o destino: ");
                await criarReserva(nome, cpf, data, origem, destino);
                break;
            }
        case "2":
            lerReserva();
            break;
        case "3":
            acessarReservas();
            break;
        case "4":
            {
                const cpf = await pergunta("Digite o cpf da reserva:");
                deletarReserva(cpf);
                break;
            }
        case "5":
            {
                const nome = await pergunta("Digite o nome completo: ");
                const cpf = await pergunta("Digite o seu cpf: ");
                const data = await pergunta("Digite a data da viagem: ");
                const origem = await pergunta("Digite a origem: ");
                const destino = await pergunta("Digite o destino: ");
                criarReserva(nome, cpf, data, origem, destino);
                break;
            }
        case "6":
            console.log("Volte Sempre!");
            process.exit();
            break;
        default:
            console.log("Escolha uma opção válida!");
    }

    setTimeout(() => {
        rl.prompt();
    }, 500);
})






