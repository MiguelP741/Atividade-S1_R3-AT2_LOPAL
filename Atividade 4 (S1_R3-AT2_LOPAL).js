const numCompra = parseFloat(prompt("Digite o valor de sua compra:"));

//numCompra: Nome da variável que será o valor da compra dado pelo usuário.

if(isNaN(numCompra)) {
    alert("Erro, isso não é um número válido!");
}else{
    if((numCompra<100)) {
        alert("Sua compra não receberá desconto, que pena!"); 
    }else{
        let numDesconto = (numCompra * 0.9);
        alert("Sua compra ganhou um desconto de 20%! Com o desconto aplicado o valor total será de: " + numDesconto);
    }
}

//O "if(isNaN(numCompra))" serve para o usuário não digitar letras ao em véz de números.
//O "numCompra<100" é para verificar se o valor da compra está na medida para aplicar o desconto de 10%.
//numDesconto: Nome da variável que será utilizada para o resultado do desconto aplicado ao valor da compra.
//O "numCompra" serve para aplicar o desconto de 10% e aplicar na variável numDesconto.