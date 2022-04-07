function numeroParOuImpar(num){

    if(isNaN(num)){
        return "O valor passado não é um número! Por favor, digite um número.";
    }

    let resultado = num % 2;

    if(resultado == 0){
        return "par";
    }
    else{
        return "impar";
    }
}

module.exports = numeroParOuImpar


