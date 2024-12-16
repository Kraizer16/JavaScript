// Array para almacenar los productos del inventario
let inventario = [];

// Función para mostrar el menú interactivo
function mostrarMenu() {
    let opcion;
    do {
        opcion = Number(prompt(
            "Seleccione una opción:\n" +
            "1. Agregar un producto\n" +
            "2. Eliminar un producto\n" +
            "3. Mostrar inventario completo\n" +
            "4. Buscar un producto por nombre\n" +
            "5. Salir"
        ));

        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                eliminarProducto();
                break;
            case 3:
                mostrarInventario();
                break;
            case 4:
                buscarProducto();
                break;
            case 5:
                alert("Saliendo del programa. ¡Gracias por usar la tienda!");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== 5);
}

// Función para agregar un producto al inventario
function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = Number(prompt("Ingrese el precio del producto:"));
    const cantidad = Number(prompt("Ingrese la cantidad del producto:"));

    if (nombre && !isNaN(precio) && !isNaN(cantidad)) {
        inventario.push({ nombre, precio, cantidad });
        alert("Producto agregado con éxito.");
    } else {
        alert("Datos inválidos. No se agregó el producto.");
    }

    alert(inventario)
}

// Función para eliminar un producto del inventario
function eliminarProducto() {
    const nombre = prompt("Ingrese el nombre del producto que desea eliminar:");
    const index = inventario.findIndex(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());

    if (index !== -1) {
        inventario.splice(index, 1);
        alert("Producto eliminado con éxito.");
    } else {
        alert("Producto no encontrado.");
    }
}

// Función para mostrar el inventario completo
function mostrarInventario() {
    if (inventario.length === 0) {
        alert("El inventario está vacío.");
    } else {
        let lista = "Inventario completo:\n";
        inventario.forEach((producto, index) => {
            lista += `${index + 1}. Nombre: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}\n`;
        });
        alert(lista);
    }
}

// Función para buscar un producto por su nombre
function buscarProducto() {
    const nombre = prompt("Ingrese el nombre del producto que desea buscar:");
    const producto = inventario.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());

    if (producto) {
        alert(`Producto encontrado:\nNombre: ${producto.nombre}\nPrecio: $${producto.precio}\nCantidad: ${producto.cantidad}`);
    } else {
        alert("Producto no encontrado.");
    }
}

// Iniciar el programa
mostrarMenu();
