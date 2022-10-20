const somaHoraExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const teste = (nomeDaFuncao, ValorEsperado, ValorRetornado) => {
  if (ValorEsperado === ValorRetornado) {
    console.log(`${nomeDaFuncao} passou`);
  } else {
    console.error(`${nomeDaFuncao} não passou`);
  }
};

teste('calculaDescontos', 2200, calculaDescontos(2500, 300));
teste('somaHorasExtras', 2500, somaHoraExtras(2000, 500));
