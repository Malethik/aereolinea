let userName = prompt("Insert username");
alert(`Welcome ${userName}!`)

const vuelos = [
    { id: 1, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 3, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 4, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 5, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 6, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 8, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 9, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
];
console.log(vuelos);

let valorInicial = 0

for (let i = 0; i < vuelos.length; i++) {
    let layover = vuelos[i]
    let escala = layover.layover === true ? "hace escala" : "no hace escala"
    layover.layover = escala
    console.log(`El vuelo desde ${vuelos[i].from} hasta ${vuelos[i].to}, costa ${vuelos[i].cost} € y ${(vuelos[i].layover)}.`)
    valorInicial += vuelos[i].cost
}

const mediumCost = valorInicial / vuelos.length;
console.log(`El coste medio es de ${mediumCost} €`);


let vueloConEscalas = vuelos.filter((vuelos) => vuelos.layover === "hace escala");
console.log(`Hay ${vueloConEscalas.length} que hace escala.`);


let ultimoCincoVuelo = vuelos.slice(-5);
for (let y = 0; y < ultimoCincoVuelo.length; y++) {
    let ultimo = ultimoCincoVuelo[y]
    console.log(`El ultimo vuelos dey hoy son desde ${ultimo.from} hasta ${ultimo.to} costa ${ultimo.cost} y ${ultimo.layover}.`)
}
//user admin exit
//da finire!

let level = prompt("Seleziona scelta utente entre admin, user or exit!")
let access = () => {
    switch (level) {
        case ("admin"):
            let addFlight = prompt("Añadir nuevo volo:");
            addFlight.push(new flight);
            alert("Nuevo vuelo añadito con sucesso!")
            break;
        case ("user"):
            let flightWithCost = prompt("Que precio esta buscando?");
            let flightCost = vuelos.filter(cost => cost.includes(cost));
            alert("hay: \n" + flightWithCost.join('\n'));
            break;
        case ("exit"):
            alert("Gracias por haber utilizar aereolinea by ISDI CODERS")
            break;
        default:
            alert("No valido, selecionar entre user, admin o exit ")
    }
}
