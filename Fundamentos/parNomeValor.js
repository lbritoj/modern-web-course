// par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Faaaaala' //contexto lexico 2
    return saudacao //mesmo com o nome das constantes sendo iguais, o comando ira retornar o saudacao existente dentro da funcao, pois esta em um contexto mais restrito. O JS comeca a busca indo do contexto mais interno para o mais externo
}

// Objetos sao grupos aninhados de pares nome/valor

const cliente = { 
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua das Águias',
        numero: 12
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)