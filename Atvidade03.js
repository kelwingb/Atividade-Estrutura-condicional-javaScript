let n1 = Number(prompt("Informe um número: "));
let n2 = Number(prompt("Informe um número: "));

let operacao = prompt("Escolha uma operação: 1-Adição, 2-Subtração, 3-Multiplicação, 4-Divisão");
let resultado;

switch (operacao) {
    case '1':
        resultado = n1 + n2;
        document.write("O resultado da soma é: " + resultado);
        break;
    case '2':
        resultado = n1 - n2;
        document.write("O resultado da subtração é: " + resultado);
        break;
    case '3':
        resultado = n1 * n2;
        document.write("O resultado da multiplicação é: " + resultado);
        break;
    case '4':
        resultado = n1 / n2;
        document.write("O resultado da divisão é: " + resultado);
        break;
    default:
        document.write('Operação inválida.');
}
