function numeroParOuImpar(num){

    console.log(typeof(num));

    let resultado = num % 2;

    if(isNaN(resultado)){
        return "O valor passado não é um número! Por favor, digite um número.";
    }
    else if(resultado == 0){
        return "par";
    }
    else{
        return "impar";
    }
}

module.exports = numeroParOuImpar


