const somaHoraExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const verfiqueSe = (valor) => {
  const assercoes = {
    exatamenteIgualA(esperado) {
      if (valor !== esperado) {
        // eslint-disable-next-line no-throw-literal
        throw {};
      }
    },
  };
  return assercoes;
};
const teste = (tituloDaFuncao, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${tituloDaFuncao} passou`);
  } catch {
    console.error(`${tituloDaFuncao} não passou`);
  }
};

teste('calculaDescontos', () => {
  const esperado = 2200;
  const retornado = calculaDescontos(2500, 300);

  verfiqueSe(retornado).exatamenteIgualA(esperado);
});
teste('somaHorasExtras', () => {
  const esperado = 2500;
  const retornado = somaHoraExtras(2000, 500);

  verfiqueSe(retornado).exatamenteIgualA(esperado);
});
