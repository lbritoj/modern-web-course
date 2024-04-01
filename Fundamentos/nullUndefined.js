let valor //não inicializada

console.log(valor) //retornará undefined, pois a variavel não foi inicializada

valor = null //variável não apontará para qualquer lugar na memória ... nao possui valor, mas foi inicializada

//null é ausência de valor .. recomendado utilizar null ao invés de undefined

// console.log(valor.toString())  --> Não é possível, pois o valor é nulo

const produto = {}
console.log(produto.preco) //retornara undefined, pois não existe preco dentro do produto
console.log(produto) // retorna um objeto vazio

produto.preco = 3.5
console.log(produto)
produto.preco = undefined //evitar atribuitr undefined
console.log(!!produto.preco) //retornará falso, pois o valor de preco é undefined
console.log(produto)

produto.preco = null
console.log(!!produto.preco) //tambem retornará falso
console.log(produto)
