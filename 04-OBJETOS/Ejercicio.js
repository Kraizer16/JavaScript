// Imagina que tienes una tienda y queires administra un inventario de prodcutos. Escribe un programa que permita lo siguiente:

// 1. Agregar un producto al invetario
// 2. Eliminar un producto por su nombre
// 3. Mostrar el inventario completo
// 4. Buscar un producto por su nombre y mostrar su información

// Requisitos:

// - El inventario debe ser un array de objetos, donde cada producto tenga las propiedades "nombre", "precio" y "cantidad".
// - Implementa un menú interactivo para que el usuario pueda elegir qué acción realizar

let inventario = [];

function mostrarMenu() {
    let = opcion = null
    while (opcion !== 5){
        opcion = Number(prompt(
            " *** MENU ***\n" +
            "1. Agregar un producto\n" +
            "2. Eliminar un producto\n" +
            "3. Mostrar inventario completo\n" +
            "4. Buscar un producto por nombre\n" +
            "5. Salir"
        ))
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
                alert("Saliendo del programa")
                break;
            default:
                alert("Opcion no válida, Intente de nuevo")
        }
    }


}

function agregarProducto(){
    const nombre  = prompt("Ingrese el nombre del producto que desea registrar")
    const precio = Number(prompt("Ingrese el precio del producto"))
    const cantidad = Number(prompt("Ingrese la cantidad del producto registrado"))

    inventario.push({ nombre, precio, cantidad })
}

function eliminarProducto(){
    mostrarInventario
    const nombre = prompt("Ingrese el nombre del producto que desea eliminar")
}

function mostrarInventario(){
    let lista = "Inventario completo:\n";
    inventario.forEach((producto, index) => {
        lista += `${index + 1}. Nombre: ${producto.nombre}\n Precio: $${producto.precio}\n Cantidad: ${producto.cantidad}\n`;
    });
    alert(lista)
}



mostrarMenu()