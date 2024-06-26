function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //ou
    const comprarTV50 = trabalho1 && trabalho2 //e
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    return { comprarSorvete, comprarTV50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))