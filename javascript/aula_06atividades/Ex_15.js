let valores = [12, 5, 8, 21, 3, 14, 7];

let maior = valores [0] ;
let menor = valores [0] ;
let soma = 0;

for (let i = 0; i < valores.length; i++) {
  if (valores[i] > maior) {
    maior = valores[i];
  }

  if (valores[i] < menor) {
    menor = valores[i];
  }

  soma += valores[i];
}

let media = soma / valores.length;

console.log("Maior número: " + maior);
console.log("Menor número: " + menor);
console.log("Soma dos valores: " + soma);
console.log("Média: " + media);