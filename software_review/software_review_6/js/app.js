import {
  registrarCliente,
  verificarMembresiaActiva,
  listarClientesActivos,
} from "./gestorClientes.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-registrar").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const fechaInscripcion = document.getElementById("fecha-inscripcion").value;
    const duracion = parseInt(document.getElementById("duracion").value);
    const mensajeRegistrar = document.getElementById("mensaje-registrar");

    if (nombre && fechaInscripcion && duracion) {
      registrarCliente(nombre, fechaInscripcion, duracion);
      mensajeRegistrar.textContent = `Cliente "${nombre}" registrado exitosamente.`;
      mensajeRegistrar.classList.add("text-green-600");
      document.getElementById("form-registrar").reset();
    } else {
      mensajeRegistrar.textContent = "Por favor, complete todos los campos.";
      mensajeRegistrar.classList.add("text-red-600");
    }
  });

  document.getElementById("form-verificar").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre-verificar").value;
    const mensajeVerificar = document.getElementById("mensaje-verificar");

    if (nombre) {
      const mensaje = verificarMembresiaActiva(
        nombre,
        new Date().toISOString().split("T")[0]
      );
      mensajeVerificar.textContent = mensaje;
      mensajeVerificar.classList.add("text-blue-600");
      document.getElementById("form-verificar").reset();
    } else {
      mensajeVerificar.textContent = "Por favor ingrese el nombre del cliente";
      mensajeVerificar.classList.add("text-red-600");
    }
  });

  document.getElementById("mostrar-clientes").addEventListener("click", () => {
    const listaClientes = document.getElementById("clientes-activos");
    const clientesActivos = listarClientesActivos(
      new Date().toISOString().split("T")[0]
    );

    if (clientesActivos.length > 0) {
      listaClientes.innerHTML = "";
      clientesActivos.forEach((cliente) => {
        const li = document.createElement("li");
        li.textContent = cliente;
        listaClientes.appendChild(li);
      });
      listaClientes.classList.remove("hidden");
    } else {
      listaClientes.innerHTML =
        '<li class="text-gray-500">No hay clientes activos</li>';
      listaClientes.classList.remove("hidden");
    }
  });
});
