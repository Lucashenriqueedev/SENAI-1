let numeros = [12, 5, 8, 21, 3, 14, 7];

let maior = numeros[0];
let menor = numeros[0];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }

  if (numeros[i] < menor) {
    menor = numeros[i];
  }

  soma += numeros[i];
}

console.log("Maior número:", maior);
console.log("Menor número:", menor);
console.log("Soma dos valores:", soma);