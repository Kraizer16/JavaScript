import { calcularFechaFinal, esFechaPosterior } from "./gestorFechas.js";

const clientes = [];

export const registrarCliente = (nombre, fechaInscripcion, duracionDias) => {
  const fechaFin = calcularFechaFinal(fechaInscripcion, duracionDias);
  clientes.push({ nombre, fechaInscripcion, fechaFin });
};

export const verificarMembresiaActiva = (nombre, fechaActual) => {
  const cliente = clientes.find(
    (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
  );
  if (!cliente) {
    return `El cliente "${nombre}" no está registrado.`;
  }
  return !esFechaPosterior(fechaActual, cliente.fechaFin)
    ? `La membresia de "${cliente.nombre}" esta activa.`
    : `La membresia de "${cliente.nombre}" ha expirado.`;
};

export const listarClientesActivos = (fechaActual) => {
  return clientes
    .filter((c) => !esFechaPosterior(fechaActual, c.fechaFin))
    .map((c) => c.nombre);
};
