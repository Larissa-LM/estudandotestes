function numeroPrimo(num){

    let numero = num; 

    if((numero == 2) || (numero == 3) || (numero == 5)) {
        return " É primo"
    }
    else if((numero % 2 == 0) || (numero % 3  == 0) || (numero % 5 == 0) ){
        return "Não é primo"
    }
    else {
        return "É primo"
    }
}
module.exports = numeroPrimo

//console.log(numeroPrimo(7));