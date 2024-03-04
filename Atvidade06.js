let rendaAnual = Number(prompt("Informe sua renda anual:"));

let imposto;

if (rendaAnual <= 1903.98) {
    imposto = 0;
} else if (rendaAnual <= 2826.65) {
    imposto = (rendaAnual - 1903.98) * 0.075;
} else if (rendaAnual <= 3751.05) {
    imposto = (rendaAnual - 2826.65) * 0.15 + 142.80;
} else if (rendaAnual <= 4664.68) {
    imposto = (rendaAnual - 3751.05) * 0.225 + 354.80;
} else {
    imposto = (rendaAnual - 4664.68) * 0.275 + 636.13;
}

document.write("Imposto de renda a pagar: R$" + imposto.toFixed(2));
