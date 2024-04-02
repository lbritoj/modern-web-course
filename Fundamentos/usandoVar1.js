{
    {
        {
            {
                var sera = 'Será ???'
            }
        }
    }
}

console.log(sera)

//No JS uma variável defina com VAR pode ser acessada fora do escopo, quando contida dentro de blocos de código
//Escopo é o local onde a variável é acessível

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)
//Quando uma variável é definida dentro de uma função, ela não pode ser acessada fora da função (local)
//Quando uma variável é definida fora de uma função, ela se torna uma variável global e é acessível pelo objeto window ...
//Portanto, var só possui 2 escopos possíveis: global (fora de uma função) ou local (dentro de uma função)
//Recomenda-se evitar a definição de variáveis no escopo global
//