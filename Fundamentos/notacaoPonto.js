console.log(Math.ceil(6.1)) //Math é um objeto, ceil é uma funcao que arredonda para cima; floor arredonda para baixo.

const obj1 = {}
obj1.nome = 'Bola'
obj1['tipo'] = 'borracha'

console.log(obj1)
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec ...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
obj2.exec()