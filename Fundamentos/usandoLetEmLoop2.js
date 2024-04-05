const funcs = [] //array vazio

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    }) //push adiciona elementos ao array
}

funcs[2]() //chamar a função funcs de índice 2
funcs[8]() //chamar a função funcs de índice 8

//aqui o i será exibido com o valor do índice solicitado, pois foi usado let