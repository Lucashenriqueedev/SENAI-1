/* 
let aluno = {
    nome: "Pombo",
    matricula: 676767
}

for(let chave in aluno){
    console.log(`${chave}:${aluno[chave]}`)
}

*/

let carros = [
    {marca: "Fiat" , modelo: "Palio"},
    {marca: "Mercedez" , modelo: "Onibus da JOTUR"},
    {marca: "Toyota" , modelo: "Corolla"}
]

carros.forEach(function(carro){
    console.log(`Marca: ${carro.marca } - Modelo: ${carro.modelo}`)
})