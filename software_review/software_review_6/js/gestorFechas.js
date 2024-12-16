export const calcularFechaFinal = (fechaInicio, duracionDias) => {
  const fecha = new Date(fechaInicio);
  fecha.setDate(fecha.getDate() + duracionDias);
  return fecha.toISOString().split("T")[0];
};

export const esFechaPosterior = (fechaA, fechaB) => {
  return new Date(fechaA).getTime() > new Date(fechaB).getTime();
};
