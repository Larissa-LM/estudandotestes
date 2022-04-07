function jogoAdvinha(numero){

    let numeroPensado = 5;
    let numeroDigitado = numero; 

    if(isNaN(numeroDigitado)){
        return "O valor recebido não é um número! Por favor, digite um número!"
    }
    else if(numeroDigitado == numeroPensado){
        return "Parabéns você acertou!!"
    } else{
        return "Você errou...continue tentando!"
    }
}

module.exports = jogoAdvinha;