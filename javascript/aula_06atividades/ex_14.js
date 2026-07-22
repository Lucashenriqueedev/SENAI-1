let numeros = [3, 8, 12, 5, 20, 7, 15];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 20) {
    console.log("Número 20 encontrado na posição " + i);
    break;
  }
}