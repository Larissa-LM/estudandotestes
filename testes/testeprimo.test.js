
const primo = require("./numprimo");

 test("Verificando se é um número primo", () =>{
    expect(primo(7)).toEqual("É primo");
})

test("Verificando se não é um número primo", () =>{
    expect(primo(10)).toEqual("Não é primo");
})