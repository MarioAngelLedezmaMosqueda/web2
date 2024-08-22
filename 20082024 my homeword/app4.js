let nombre = prompt("Ingresa tu nombre: ");
let apellido = prompt("Ingresa tu apellido: ");
let peso = prompt("Ingresa tu peso: ");
let altura = prompt("Ingresa tu altura: ");
let nacionalidad = prompt("Ingresa tu nacionalidad: ");
let alturaalcuadrado = parseFloat(altura) * parseFloat(altura);
let imc = parseInt(peso) / parseFloat(alturaalcuadrado);

console.log("tu nombre es: " + nombre);
console.log("tu apellido es: " + apellido);
console.log("tu peso es: " + peso);
console.log("tu altura es: " + altura);
console.log("tu nacionalidad es: " + nacionalidad);
console.log("El imc es: " + imc);

console.log(typeof imc);
