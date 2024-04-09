function getInteiroAleatorioEntre (min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao 

/* Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao.
Além disso, a variável poderia iniciar com -1, que iria garantir uma repetição inicial do DO
*/

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O número escolhido foi ${opcao}.`)
} while (opcao != -1) 

console.log('Até a próxima')