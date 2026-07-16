let ventas = [];
let continuar = true;

while (continuar) {

    let vendedor = prompt("Nombre del vendedor:");
    let producto = prompt("Nombre del producto:");
    let cantidad = parseInt(prompt("Cantidad vendida:"));
    let precio = parseFloat(prompt("Precio unitario:"));

    ventas.push({
        vendedor: vendedor,
        producto: producto,
        cantidad: cantidad,
        precio: precio
    });

    continuar = confirm("¿Deseas registrar otra venta?");
}

// Total de ventas
let totalVentas = ventas.length;

// Total de ingresos
let totalIngresos = ventas.reduce((total, venta) => {
    return total + (venta.cantidad * venta.precio);
}, 0);

// Unidades por producto
let productos = {};

ventas.forEach(venta => {
    if (productos[venta.producto]) {
        productos[venta.producto] += venta.cantidad;
    } else {
        productos[venta.producto] = venta.cantidad;
    }
});

// Ventas por vendedor
let vendedores = {};

ventas.forEach(venta => {
    let monto = venta.cantidad * venta.precio;

    if (vendedores[venta.vendedor]) {
        vendedores[venta.vendedor] += monto;
    } else {
        vendedores[venta.vendedor] = monto;
    }
});

// Buscar vendedor con más ventas
let mejorVendedor = "";
let mayorMonto = 0;

for (let vendedor in vendedores) {
    if (vendedores[vendedor] > mayorMonto) {
        mayorMonto = vendedores[vendedor];
        mejorVendedor = vendedor;
    }
}

// Mostrar resultados
console.log("Total de ventas realizadas:", totalVentas);
console.log("Total de ingresos: $" + totalIngresos.toFixed(2));

console.log("Unidades vendidas por producto:");
for (let producto in productos) {
    console.log(producto + ": " + productos[producto] + " unidades");
}

console.log("Vendedor con más ventas:", mejorVendedor + " ($" + mayorMonto.toFixed(2) + ")");