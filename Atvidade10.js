let nota = Number(prompt("Informe sua nota:"));

if (nota >= 0 && nota <= 100) {
    if (nota >= 90) {
        document.write("Excelente");
    } else if (nota >= 70 && nota < 90) {
        document.write("Bom");
    } else if (nota >= 50 && nota < 70) {
        document.write("Regular");
    } else {
        document.write("Insuficiente");
    }
} else {
    document.write("Por favor, informe uma nota válida entre 0 e 100.");
}
