function Calcular() {
    var valorElemento1 = document.getElementById("valor1");
    var valorElemento2 = document.getElementById("valor2");
    var valorElemento3 = document.getElementById("valor3");
    var valorElemento4 = document.getElementById("valor4");

    var valor1 = valorElemento1.value;
    var valor2 = valorElemento2.value;
    var valor3 = valorElemento3.value;
    var valor4 = valorElemento4.value;

    var valor1 = parseFloat(valor1);
    var valor2 = parseFloat(valor2);
    var valor3 = parseFloat(valor3);
    var valor4 = parseFloat(valor4);

    if (!valor1 || !valor2 || !valor3 || !valor4) {
        var elementoValor = document.getElementById("valor")
        var valor = "Insira os valores corretamente!"
        elementoValor.innerHTML = valor
    }
    else {
        var resultado1 = (valor1 + valor2 + valor3 + valor4) / 4
        var elementoValor = document.getElementById("valor")
        var valor = "O resultado é: " + resultado1
        elementoValor.innerHTML = valor
    }
}
