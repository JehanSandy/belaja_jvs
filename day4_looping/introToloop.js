// while
let i = 5
while (i > 0) { // condisi 
    console.log(`looping`)
    i-- // cara menghentikan looping dengan mengurangi value (i) 
}
// // do while
let j = 5
do {
    console.log(`looping2`)
    j--
} while (j > 0)

//For
for (let k = 5; k > 0; k--) {
    console.log(`looping for`)
}
// break dan continue
//break
let a = 0
while (a < 5) {
    if (a == 3) break // kondisi 3 tidak ke consol.log 0,1,2
    console.log(a)
    a++
}
let a2 = 0
while (a2 < 5) {
    console.log(a2)
    if (a2 == 3) break // kondisi 3 ke console.log 0,1,2,3
    a2++
}
for (let b = 0; b < 5; b++) {
    if (b == 3) break
    console.log(b)
}
for (let b2 = 0; b2 < 5; b2++) {
    console.log(b2)
    if (b2 == 3) break
}
//continue --> untuk melewatkan task sesuai condisi tertentu
// tampilkan angka ganjil
for (let c = 0; c < 5; c++) {
    if (c % 2 == 0) continue
    console.log(c)
}
//tampilkan huruf selain 'l'
let str = `hello`
for (let d=0;d<str.length;d++){
    if (str.charAt(d) == `l`) continue
    console.log(str.charAt(d))
}
for (let k = 5; k > 0; k--) {
    if (k % 2 == 0){
        k = `genap`

    } 
    console.log(k)
}