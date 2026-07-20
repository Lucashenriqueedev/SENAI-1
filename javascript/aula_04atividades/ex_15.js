let biblioteca = [
  { titulo: "Romeu e Julieta ", autor: "William Shakespeare", paginas: 100, lido: true },
  { titulo: "É Assim Que Acaba  ", autor: "colleen", paginas: 250, lido: false },
  { titulo: "Dom Casmurro  ", autor: "Machado de Assis", paginas: 150, lido: true },
  { titulo: "A Hipótese do Amor ", autor: "Ali Hazelwood", paginas: 300, lido: false },
  { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", paginas: 250, lido: true }
];


biblioteca.forEach(function(livro) {
  console.log(livro.titulo, "-", livro.autor);
});

console.log(Object.keys(biblioteca[0]));

for (let chave in biblioteca[0]) {
  console.log(chave, biblioteca[0][chave]);
}

console.log("editora" in biblioteca[0]);

biblioteca.forEach(function (livro) {
  if (("editora" in livro)) {
    livro.editora = "Editora ABC";
  }
});

console.log(biblioteca);