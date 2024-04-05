//hoisting é um efeito que acontece em JS, que seria um absurdo em outra linguagem. Quando declaramos uma variável usando VAR, o próprio interpretador da linguagem pega a variável e "joga" para cima, içamento (hoisting)

console.log('a =', a)
var a = 2
console.log('a =', a)

/*
é como se a linguagem fizesse:

var a
console.log('a =', a)
a = 2
console.log('a =', a)

*/

//variavel declarada dentro de função ... O efeito é o mesmo

function teste () {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()

// Fazendo o mesmo com let ... não funciona.

console.log('a =', a)
let a = 2
console.log('a =', a)