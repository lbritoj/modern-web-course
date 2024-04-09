const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5)
        break //Interrompe o laço FOR no valor do IF
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5)
        continue //não executa o laço FOR sobre o valor do IF
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}