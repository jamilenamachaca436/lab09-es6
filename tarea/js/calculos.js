// Rest: recibe cualquier cantidad de notas
export const promedio = (...notas) => {
  if (notas.length === 0) return 0;

  const suma = notas.reduce((total, nota) => total + nota, 0);
  return suma / notas.length;
};

// Parámetro por defecto
export const estaAprobado = (nota, minima = 13) => {
  return nota >= minima;
};

// Desestructuración de objetos y spread de arreglos
export const calcularEstudiante = ({ nombre, notas, minima = 13 }) => {
  const resultado = promedio(...notas);

  return {
    nombre,
    notas: [...notas],
    promedio: resultado,
    aprobado: estaAprobado(resultado, minima),
  };
};

// Spread de objetos y arreglos
export const ampliarReporte = (estudiante, datosExtra = {}) => {
  return {
    ...estudiante,
    ...datosExtra,
    notas: [...estudiante.notas],
  };
};

// Template literals
export const formatearReporte = ({ nombre, promedio, aprobado }) => {
  const estado = aprobado ? "Aprobado" : "Desaprobado";
  return `${nombre}: promedio ${promedio.toFixed(2)} - ${estado}`;
};
