
const numeroRecebido = require("./jogo-advinha");

test("Verificando se é um número", () => {
    expect(numeroRecebido("Lari")).toEqual("O valor recebido não é um número! Por favor, digite um número!")
})

test("Verificando se o número foi adivinhado" , () => {
    expect(numeroRecebido(5)).toEqual("Parabéns você acertou!!")
})

test("Verificando se o número não foi adivinhado" , () => {
    expect(numeroRecebido(9)).toEqual("Você errou...continue tentando!")
})