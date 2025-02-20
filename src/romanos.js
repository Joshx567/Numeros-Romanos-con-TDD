function generarNumeroRomano(numero) {
    if (numero < 1 || numero > 1000) {
        return "Número fuera de rango (1-1000)";
    }

    const valores = [
        { valor: 1000, simbolo: "M" }, { valor: 900, simbolo: "CM" },
        { valor: 500, simbolo: "D" }, { valor: 400, simbolo: "CD" },
        { valor: 100, simbolo: "C" }, { valor: 90, simbolo: "XC" },
        { valor: 50, simbolo: "L" }, { valor: 40, simbolo: "XL" },
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
