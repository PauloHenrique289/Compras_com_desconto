// 1. Função para capturar o valor (exemplo usando prompt do navegador)
let entrada = prompt("Digite o valor da compra (R$):");

// Substitui vírgula por ponto caso o usuário digite com vírgula e converte para número
let valorCompra = parseFloat(entrada.replace(",", "."));

// Verifica se o valor digitado é válido
if (isNaN(valorCompra) || valorCompra < 0) {
    console.log("Por favor, digite um valor numérico válido.");
} else {
    let percentualDesconto = 0;

    // 2. Condições de desconto
    if (valorCompra >= 500) {
        percentualDesconto = 0.10; // 10%
    } else if (valorCompra >= 100) {
       percentualDesconto = 0.05; // 5%
    }

    // 3. Cálculos
    let valorDesconto = valorCompra * percentualDesconto;
    let valorComDesconto = valorCompra - valorDesconto;

    // 4. Retorno dos resultados
    console.log("--- Resumo da Compra ---");
    console.log(`- Valor da compra: R$ ${valorCompra.toFixed(2)}`);
    console.log(`- Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
    console.log(`- Valor da compra com desconto: R$ ${valorComDesconto.toFixed(2)}`);
}