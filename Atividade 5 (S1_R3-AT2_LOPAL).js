const numMultiplo = parseFloat(prompt("Digite um número para saber se é multiplo de 5:"));

//numMultiplo: Nome da variável que será calculado para saber se é multiplo de 5.

if(isNaN(numMultiplo)) {
    alert("Erro, isso não é um número válido!");
}else{
    if((numMultiplo%5==0)) {
        alert("Seu número é multiplo de 5"); 
    }else{
        alert("Seu número NÃO é multiplo de 5")
    }
}

//O "if(isNaN(numMultiplo))" serve para o usuário não digitar letras ao em véz de números.
//O "numMultiplo%5==0" é para o computador considerar múltiplo de 5 se o número dividido por 5 e sobrar 0, e não multiplo de 5 se o número dividido por 5 não sobrar 0.