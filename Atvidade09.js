let compra = Number(prompt("Informe o valor da compra:"));

let desconto10 = compra * 10 / 100;
let novoPreco10 = compra - desconto10;

let desconto15 = compra * 15 / 100;
let novoPreco15 = compra - desconto15;

if (compra < 100) {
    console.log("Não recebe desconto");
} else if (compra >= 100 && compra < 500) {
    console.log("Desconto de 10%, você pagará: " + novoPreco10);
} else {
    console.log("Desconto de 15%, você pagará: " + novoPreco15);
}
