//var
function a() {
    var name = `jehan` // hanya berlaku di dalam function saja, jadi console.log ndak bisa di jalankan
}
// console.log(name)

// mutable
var mobil = `toyota`
mobil = `ferarri`
console.log(mobil)

// let
let i = 1
while (i < 2) {
    let gelas = `besar`
    i++
}

// const
const j = 1
while (j < 2) {
    let handuk = `besar`
    i++
}

const single = false
single = true
console.log(single)