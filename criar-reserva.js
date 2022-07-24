const fsPromises = require("fs").promises;
const Reserva = require("./reserva");

function criarReserva(nome, cpf, data, origem, destino) {
    const reserva = new Reserva(nome, cpf, data, origem, destino);

    const fd = fsPromises.open(`./reservas/${cpf}.json`, 'w+')
        .then(() => {
            fsPromises.writeFile(`./reservas/${cpf}.json`, JSON.stringify(reserva))
                .then(() => {
                    console.log("Reserva realizada com sucesso!");
                });
        });
}

module.exports = criarReserva;





