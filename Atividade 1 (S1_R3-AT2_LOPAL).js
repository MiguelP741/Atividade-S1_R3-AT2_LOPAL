let tentativa = parseInt(prompt("Digite um número"));

//tentativa: Nome da variável que será o número dado pelo usuário.

if(isNaN(tentativa)) {
    alert("Erro, isso não é um número válido!");
}else{
    if(tentativa>0) {
        alert("Seu número é positívo!"); 
    }else{
        if(tentativa==0) {
            alert("Seu número é igual a 0!");
        }else{
            alert("Seu número é negativo!");
        }
    }
}
//O "if(isNaN(tentativa))" serve para o usuário não digitar letras ao em véz de números.
//O "tentativa>0" é para o computador considerar números maiores que 0 como positivos e números menores que 0 negativos.