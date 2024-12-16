function main() {
  const cantConductores = Number(
    prompt("Cuantos conducores quieres registrar?"),
    10
  );
  const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
  const conductores = [];

  for (let i = 0; i < cantConductores; i++) {
    const nombre = prompt(`Ingresa el nombre del conductor #${i + 1}:`);
    const kilometros = [];
    for (let d = 0; d < dias.length; d++) {
      const kms = Number(
        prompt(`Cantidad de km manejados por ${nombre} el ${dias[d]}:`)
      );
      kilometros.push(kms);
    }
    conductores.push({ nombre, kilometros });
  }

  const conductorTotal = conductores.map((conductor) => ({
    ...conductor,
    total: conductor.kilometros.reduce((sum, kms) => sum + kms, 0),
  }));

  const diasTotales = dias.map((_, i) =>
    conductores.reduce((sum, conductor) => sum + conductor.kilometros[i], 0)
  );

  const totalkilometros = conductorTotal.reduce(
    (sum, conductor) => sum + conductor.total,
    0
  );
  const promedioDia = diasTotales.map((total) => total / cantConductores);
  const promedioSemana = totalkilometros / cantConductores;

  const topconductor = conductorTotal.reduce((max, conductor) =>
    conductor.total > max.total ? conductor : max
  );

  const diasTop = diasTotales.indexOf(Math.max(...diasTotales));
  const topDay = dias[diasTop];

  const container = document.getElementById("contenedor");
  container.innerHTML = `
<h2>Reporte por Conductor</h2>
<table>
<thead>
<tr>
<th>Nombre</th>
${dias.map((day) => `<th>${day}</th>`).join("")}
<th>Total</th>
</tr>
</thead>
<tbody>
${conductorTotal
  .map(
    (conductor) => `
<tr>
<td>${conductor.nombre}</td>
${conductor.kilometros.map((kms) => `<td>${kms}</td>`).join("")}
<td>${conductor.total}</td>
</tr>
`
  )
  .join("")}
</tbody>
</table>
<h2>Estadísticas Generales</h2>
<table>
<thead>
<tr>
<th>Día</th>
${dias.map((day) => `<th>${day}</th>`).join("")}
</tr>
</thead>
<tbody>
<tr>
<td>Promedio</td>
${promedioDia.map((avg) => `<td>${avg.toFixed(2)}</td>`).join("")}
</tr>
</tbody>
</table>
<p>Promedio semanal por chofer: <strong>${promedioSemana.toFixed(
    2
  )} km</strong></p>
<p>Conductor con mayor recorrido: <strong>${topconductor.nombre} (${
    topconductor.total
  } km)</strong></p>
<p>Día con mayor recorrido total: <strong>${topDay} (${
    diasTotales[diasTop]
  } km)</strong></p>
`;
}

main();
