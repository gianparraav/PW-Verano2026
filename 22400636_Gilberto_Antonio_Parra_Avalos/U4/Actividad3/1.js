//1.
function potencias(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++){
        resultado = resultado * base;
    }
    return resultado
}
console.log(potencias(8,3))