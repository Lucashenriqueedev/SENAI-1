let amigos = [
    {nome: "pombax" ,idade: 63},
    {nome: "simigor" ,idade: 76},
    {nome: "nathan63" ,idade: 63},
    {nome: "men" ,idade:37}
]

let maiores = [];

amigos.forEach(function(amigos){
  if (amigos.idade >= 18) {
    maiores.push(amigos);
  }
});

console.log(maiores);