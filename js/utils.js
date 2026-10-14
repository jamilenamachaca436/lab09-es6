// Exportaciones nombradas
export const iva = 0.18;
export const calcularTotal = (precio, cantidad = 1) =>
  precio * cantidad * (1 + iva);
export const formatearMoneda = (monto) => `S/ ${monto.toFixed(2)}`;
// Exportación por defecto (solo una por archivo)
const bienvenida = (nombre) => `Bienvenido(a), ${nombre}`;
export default bienvenida;
