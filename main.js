// 1. Captura o valor
let entrada = prompt("Digite o valor da compra (R$):");

// Se o usuário cancelar, encerra sem erro
if (entrada === null) {
    console.log("Operação cancelada.");
} else {
    // Aceita vírgula ou ponto como separador decimal
    let valorCompra = parseFloat(entrada.replace(",", "."));

    // Valida a entrada
    if (isNaN(valorCompra) || valorCompra < 0) {
        console.log("Por favor, digite um valor numérico válido.");
    } else {
        let percentualDesconto = 0;

        // 2. Regras de desconto
        if (valorCompra >= 500) {
            percentualDesconto = 0.10; // 10%
        } else if (valorCompra >= 100) {
            percentualDesconto = 0.05; // 5%
        }

        // 3. Cálculos
        let valorDesconto = valorCompra * percentualDesconto;
        let valorComDesconto = valorCompra - valorDesconto;

        // 4. Resultado
        console.log("--- Resumo da Compra ---");
        console.log(`- Valor da compra: R$ ${valorCompra.toFixed(2)}`);
        console.log(`- Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
        console.log(`- Valor da compra com desconto: R$ ${valorComDesconto.toFixed(2)}`);
    }
}