
import configuracion, { curso, estudiantes } from "./datos.js";

import {
    calcularEstudiante,
    ampliarReporte,
    formatearReporte
} from "./calculos.js";

const listaReportes = document.querySelector("#reportes");

// Mostrar el nombre del curso
const tituloCurso = document.createElement("li");
tituloCurso.textContent = `Curso: ${curso}`;
listaReportes.append(tituloCurso);

// Procesar cada estudiante
estudiantes.forEach((estudiante) => {
    const resultado = calcularEstudiante({
        ...estudiante,
        minima: estudiante.minima ?? configuracion.notaMinima
    });

    const reporteCompleto = ampliarReporte(resultado, {
        curso,
        notaMinima: configuracion.notaMinima
    });

    const elemento = document.createElement("li");
    elemento.textContent =
        `${formatearReporte(reporteCompleto)} | Notas: ${reporteCompleto.notas.join(", ")}`;

    listaReportes.append(elemento);
});
