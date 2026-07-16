//Comisión de empleados según ventas
let venta;
do {
  venta = parseFloat(prompt("Ingrese ventas entre $5000 y $30000:"));
} while (isNaN(venta) || venta < 5000 || venta > 30000);

let comision = venta < 10000 ? venta * 0.10 : venta * 0.15;
console.log(`Comisión: $${comision.toFixed(2)}`);
