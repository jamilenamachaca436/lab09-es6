import bienvenida, { iva, calcularTotal, formatearMoneda } from "./utils.js";

console.log("Laboratorio 09 listo");
// ===== Ejercicio 2: let, const y arrow functions =====
function sumaES5(a, b) {
  // ES5
  if (b === undefined) b = 0;
  return a + b;
}
const suma = (a, b = 0) => a + b; // ES6+

console.log(sumaES5(2, 3), suma(2, 3), suma(2)); // 5 5 2

const saludar = (nombre = "invitado") => `Hola, ${nombre}`;
const crearProducto = (nombre, precio) => ({ nombre, precio });
console.log(saludar(), saludar("Ana")); // Hola, invitado Hola, Ana
console.log(crearProducto("Mouse", 45)); // {nombre: 'Mouse', precio: 45}

// ===== Ejercicio 3: Desestructuración =====
const persona = { nombre: "Ana", edad: 22 };
const { nombre, edad, ciclo = "V" } = persona;
console.log(nombre, edad, ciclo); // Ana 22 V
const [primero, segundo] = [10, 20];
console.log(primero, segundo); // 10 20
const mostrar = ({ nombre, precio }) => `${nombre}: S/ ${precio}`;
console.log(mostrar({ nombre: "Teclado", precio: 89 })); // Teclado: S/ 89

// ===== Ejercicio 4: Spread y rest =====
const base = [1, 2];
const copia = [...base, 3];
console.log(base, copia); // [1, 2] [1, 2, 3]
const producto = { nombre: "Laptop", precio: 2500 };
const oferta = { ...producto, precio: 2300 };
console.log(oferta); // {nombre: 'Laptop', precio: 2300}
const sumar = (...nums) => nums.reduce((t, n) => t + n, 0);
console.log(sumar(1, 2, 3, 4)); // 10
const [ganador, ...otros] = ["Ana", "Luis", "Rosa"];
console.log(ganador, otros); // Ana ['Luis', 'Rosa']


// ===== Ejercicio 5: Módulos =====
console.log(bienvenida("Ana")); // Bienvenido(a), Ana
const productos = [
{ nombre: "Mouse", precio: 45, cantidad: 2 },
{ nombre: "Teclado", precio: 189, cantidad: 1 }
];
const lista = document.querySelector("#lista");
productos.forEach(({ nombre, precio, cantidad }) => {
const subtotal = formatearMoneda(calcularTotal(precio, cantidad));
lista.innerHTML += `<li>${nombre} x${cantidad} = ${subtotal}</li>`;
});
const total = productos.reduce((t, { precio, cantidad }) => t + calcularTotal(precio,
cantidad), 0);
document.querySelector("#total").textContent = `Total con IGV (${iva * 100}%):
${formatearMoneda(total)}`;