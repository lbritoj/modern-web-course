function teste1(num) {
    if(num > 7) // as chaves são opcionais no IF em JS ... mas ele só irá associar a primeira sentenca de codigo ao IF
        console.log(num) //somente esta sentença será associada
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); {
        console.log(num)
    } // o bloco de código não está associada ao IF, pois foi colocado ';' ... ';' demarca o final da sentença
}

teste2(6)
teste2(8)