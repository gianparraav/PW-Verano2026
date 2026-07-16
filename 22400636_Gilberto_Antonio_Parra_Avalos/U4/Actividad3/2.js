//2.Cajero Automatico
let opcion;
let saldoInicial = 5000;

do {
    opcion = parseInt(prompt("1.Consultar Saldo" + "\n" + "2.Depositar" + "\n" + "3.Retirar" + "\n" + "4.Salir"));

    switch (opcion) {

        case 1:
            console.log("Saldo total = "+saldoInicial)
            break;
        case 2:
            let depositar=parseInt(prompt("Ingresa cuanto quieres depositar:"));
            saldoInicial=saldoInicial+depositar;
            break;

        case 3:
        let retirar=parseInt(prompt("Ingresa cuanto quieres retirar:"));
            if(saldoInicial<retirar){
                console.log("No hay suficiente dinero")
            }else{
            saldoInicial=saldoInicial-retirar;
            }
        break;
        



    }
} while (opcion != 4);