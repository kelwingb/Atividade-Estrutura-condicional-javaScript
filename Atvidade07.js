let sinalTransito = prompt("Verde - Amarelo - Vermelho");

switch (sinalTransito) {
    case "verde":
        document.write("Pode passar.");
        break;
    case "amarelo":
        document.write("Atenção!!");
        break;
    case "vermelho":
        document.write("PARE!!");
        break;
    default:
        document.write('Sinal desconhecido.');
}
