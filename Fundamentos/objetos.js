//Objeto em JS é um conjunto de chave e valor

const prod1 = {} //o par de chaves representa um objeto ... não se confunde com JSON

prod1.nome = 'celular' //insere no objeto a chave 'nome' e valor 'celular'
prod1.preco = 4998.99
prod1['Desconto legal'] = 0.4 // É possivel atribuir nome composto para a Chave, mas não é uma boa prática


console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90,
    obj: {
        blabla:1,
        obj: {
            blabla:2
        }
    }
}

console.log(prod2)