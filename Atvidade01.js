let sal = Number(prompt("Informe seu salário: "));

let imposto;
let novoSalario;

if (sal >= 500000) {
    imposto = sal * 20 / 100;
    novoSalario = sal - imposto;
    document.write("Imposto aplicado de 20%, seu novo salário é: " + novoSalario);
} else {
    imposto = sal * 10 / 100;
    novoSalario = sal - imposto;
    document.write("Imposto aplicado de 10%, seu novo salário é: " + novoSalario);
}
