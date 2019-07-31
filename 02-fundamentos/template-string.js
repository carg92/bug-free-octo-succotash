let nombre = 'Deadpool';
let nombre_real = 'Wade Wilson';

console.log(`El antiheroe se llama ${nombre},
su nombre real es ${nombre_real}.`);

let nombreCompleto = nombre + ' ' + nombre_real;
let nombreTemplate = `${nombre} ${nombre_real}`;
console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} es ${nombre_real}`;
}
console.log(`El nombre de ${getNombre()}`);