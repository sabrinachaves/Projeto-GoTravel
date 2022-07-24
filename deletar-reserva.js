const fsPromises = require("fs").promises;
const path = require("path");

function deletarReserva(cpf) {
    const caminhoDaReserva = path.join(__dirname, `./reservas/${cpf}.json`);

    fsPromises.rm(caminhoDaReserva)
        .then(() => {
            console.log("Reserva cancelada!");
        });
}

module.exports = deletarReserva;
