const numeracao = parseInt(prompt("Digite uma numeração para saber se é par ou impar:"));

//numeracao: Nome da variável que será a numeração dada pelo usuário para saber se é par ou impar.

if(isNaN(numeracao)) {
    alert("Erro, isso não é um número válido!");
}else{
    if((numeracao%2==0)) {
        alert("Seu número é par"); 
    }else{
        alert("Seu número é impar");
    }
}

//O "if(isNaN(numeracao))" serve para o usuário não digitar letras ao em véz de números.
//O "numeracao%2==0" é para o computador considerar par se o número dividido por 2 e sobrar 0, e impar se o número dividido por 2 não sobrar 0.