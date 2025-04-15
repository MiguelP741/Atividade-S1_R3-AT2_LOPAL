const idade = parseInt(prompt("Digite sua idade:"));

//idade: Nome da variável que será a idade inserida pelo usuário.

if(isNaN(idade)) {
    alert("Erro, isso não é um número válido!");
}else{
    if(idade>=18) {
        alert("Você é maior de idade"); 
    }else{
        if(idade<=0) {
            alert("Como você está aqui digitando isso?");
        }
        alert("Você é menor de idade");
    }
}

//O "if(isNaN(idade))" serve para o usuário não digitar letras ao em véz de números.
//O "idade>=18" é para o computador considerar dígitos maiores que 18 como pessoas maiores de idade, e caso for menor que o considerado é menor de idade.
//O "if(idade<=0)" serve para caso o usuário digitar um número negativo ou igual a 0.