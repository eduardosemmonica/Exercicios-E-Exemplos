const dobrar = function (x) {
  return x * 2;
}

console.log(dobrar(10)); // Saida: 20

// mesma funcao reescrita como arrow function
const dobrarArrow = (x) => {
  return x * 2;
}

console.log(dobrarArrow(10)); // Saida: 20

// com implicit return (uma linha so, sem "return" e sem chaves)
const dobrarCurta = (x) => x * 2;

console.log(dobrarCurta(10)); // Saida: 20

// com mais de uma linha

const calcular = (a, b) => {
  const soma = a + b;
    return soma + 2;
};

console.log(calcular(10, 20));
