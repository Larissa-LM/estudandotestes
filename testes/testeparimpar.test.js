const numParOuImpar = require('./parouimpar');

test("Verificando se 4 é par",() => {
    expect(numParOuImpar(4)).toEqual("par");
})

test("Verificando se 9 é ímpar", () => {
    expect(numParOuImpar(9)).toEqual("impar");
})

test("Verificando se está recebendo um número",() => {
    expect(numParOuImpar("arroz")).toEqual("O valor passado não é um número! Por favor, digite um número.");
})

test("Verificando se está recebendo um número",() => {
    expect(numParOuImpar([0,1,2,3])).toEqual("O valor passado não é um número! Por favor, digite um número.");
})
