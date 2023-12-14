let userName = prompt("Insert username");
alert(`Welcome ${userName}, we are happy to see you here!`)

const flight = [
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
console.log(flight);

let startingValue = 0

for (let i = 0; i < flight.length; i++) {
    let layover = flight[i]
    let withLayover = layover.layover === true ? "hace escala" : "no hace escala"
    layover.layover = withLayover
    console.log(`El vuelo desde ${flight[i].from} hasta ${flight[i].to}, costa ${flight[i].cost} € y ${(flight[i].layover)}.`)
    startingValue += flight[i].cost
}

const avarangeCost = startingValue / flight.length;
console.log(`El coste medio es de ${avarangeCost} €`);


let flightWithLayover = flight.filter((flight) => flight.layover === "hace escala");
console.log(`Hay ${flightWithLayover.length} que hace escala.`);


let lastFive = flight.slice(-5);
for (let y = 0; y < lastFive.length; y++) {
    let ultimo = lastFive[y]
    console.log(`El ultimo vuelos dey hoy son desde ${ultimo.from} hasta ${ultimo.to} costa ${ultimo.cost} y ${ultimo.layover}.`)
}

let level = prompt("Seleziona scelta utente entre admin, user or exit!");

const access = () => {
    switch (level) {
        case ("admin"):
            let newFlight = {
                id: flight.length + 1,
                to: prompt("añadir la destinacion del nuevo vuelo"),
                from: prompt("añadir la ciudad de partenza"),
                cost: parseInt(prompt("inserir el costo del vuelo")),
                layover: confirm("El vuelo hace escala?"),
            }
            vuelos.push(newFlight)
            alert("Nuevo vuelo añadito con sucesso!")
            console.log(flight)
            break;
        case ("user"):
            let flightWithCost = parseInt(prompt("Que precio esta buscando?"));
            let flightCost = flight.filter(flight => flight.cost === flightWithCost);
            alert("hay: \n" + flightCost.map(flight => `${flight.from} hasta ${flight.to}`).join(`\n`));
            break;
        case ("exit"):
            alert("Gracias por haber utilizar aereolinea by ISDI CODERS")
            break;
        default:
            alert("No valido, selecionar entre user, admin o exit ")
    }
}
access();
