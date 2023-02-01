// menggambar bindang horizontal
let res = ``
for (let i = 0; i < 5; i++) {
    res += ` * `
}
console.log(res)

let res1 = ``
for (let i = 0; i < 5; i++) {
    res1 += ` * `
    console.log(res1)
}
// menggambar bintang vertikal
let res2 = ``
for (let i = 0; i < 5; i++) {
    res2 += `*` + `\n`
}
console.log(res2)

// menggambar bintang kotak
let res3 = ``
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        res3 += ` * `
    }
    res3 += `\n`
}
console.log(res3)

// membuat segitiga siku-siku
let res4 = ``
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        res4 += ` * `
    }
    res4 += `\n`
}
console.log(res4)

