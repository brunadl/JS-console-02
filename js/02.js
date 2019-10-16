let texto = 'JavaScript é uma linguagem de programação';
console.log(texto);

//pegar o conteúdo de uma posição da string
console.log(texto[4]);

//exibir o tamanho da string
console.log(texto.length);

//exibir em letras maiúsculas
console.log(texto.toUpperCase());

//exibir em letras minúsculas
console.log(texto.toLowerCase());

//pegar um caracter de uma posiçãoptimize
console.log(texto.charAt(23));

//verificar se existe o conteúdo na string
console.log(texto.indexOf('o'));

//verificar se existe o conteúdo na string partindo do fim
console.log(texto.lastIndexOf('a'));

//pegar um pedaço da string
console.log(texto.substring(4,25));

//substituir um valor
console.log(texto.replace('J','Z'));

for (var i = 0; i < texto.length; i++) {

  if (texto[i] === texto[i].toUpperCase()) {
     console.log(texto[i]);    
  }
}
