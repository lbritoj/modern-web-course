// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}

const {nome, idade} = pessoa //tire de dentro do objeto pessoa, os atributos nome e idade.
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i )

//Retirando um atributo inexistente, retornará undefindes ... é possivel atribuir um valor padrao
const {sobrenome, bemHumorada = true} = pessoa //bemHumorada recebe o valor padrão de true ... caso nao exista, retornará o valor padrao
console.log(sobrenome, bemHumorada)

const{ endereco: {logradouro, numero, cep}} = pessoa //extrair apenas os atributos do objeto endereco que esta dentro do objeto pessoa.
console.log(logradouro, numero, cep)