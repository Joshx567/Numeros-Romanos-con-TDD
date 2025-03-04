function generarNumeroRomano(numero) {
    if (numero < 1 || numero > 1000) {
        return "Número fuera de rango (1-1000)";
    }

    const valores = [
        { valor: 10, simbolo: "X" }, { valor: 9, simbolo: "IX" },
        { valor: 5, simbolo: "V" }, { valor: 4, simbolo: "IV" },
        { valor: 1, simbolo: "I" }
    ];

    let resultado = "";
    for (let i = 0; i < valores.length; i++) {
        while (numero >= valores[i].valor) {
            resultado += valores[i].simbolo;
            numero -= valores[i].valor;
        }
    }
    return resultado;
}

export default generarNumeroRomano;
