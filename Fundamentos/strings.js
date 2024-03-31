//String é uma cadeia de caracteres que no JS pode ser delimitado por aspas simples ou duplas ou crases;

const escola = 'Cod3r'

console.log(escola.charAt(4)) //retorna o caractere de índice 4 da constante escola
console.log(escola.charAt(5)) //não retorna nenhum valor quando o índice estiver fora do intervalo da string

console.log(escola.charCodeAt(3)) //Retorna o valor do caratere na tabela ASCII

console.log(escola.substring(1)) //A partir do caractere índice 1 ele irá retornar o restante da string; Se dois parametros forem enviados, ele retornará o intervalo entre eles, incluindo o ininal e terminando antes do final
console.log(escola.substring(1,3))

console.log('Escola '.concat(escola).concat('!'))

console.log(escola.replace(3, 'e')) //substituir o caractere 3 pelo caractere e

console.log('Ana,Maria,Pedro'.split(',')) //Cria um array, dividindo as strings. O caractere enviado será o delimitador da separação

