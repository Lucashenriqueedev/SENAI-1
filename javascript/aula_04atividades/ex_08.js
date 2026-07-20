let carro = {
  marca: "BMW",
  modelo: "BmW11"
};

for(let chave in carro){
    console.log(`${chave}:${carro[chave]}`)
}

carro.ano = 63;
carro.cor = "Preta";
carro.placa = "POM-6767";

console.log("\n-------------------");

for(let chave in carro){
    console.log(`${chave}:${carro[chave]}`)
}

delete carro.placa

console.log("\n-------------------");

for(let chave in carro){
    console.log(`${chave}:${carro[chave]}`)
}