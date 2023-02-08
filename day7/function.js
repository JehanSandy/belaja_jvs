// syntax function
// function declaraton
function myFunction(params) {
    console.log(`ini function declaration`)
}

// function expression
let myFunction2 = function () {
    console.log(`ini function expression`)
}
// function expression with arrow function `=>`
let myFunction3 = () => {
    console.log(`arrow function`)
}

// memanggil function
myFunction()
myFunction2()
myFunction3()

let greeting = () => {
    let name1 = `andra`
    let name2 = `backbone`
    let namaLengkap = name1 + name2

    // output sebuah function di return jadi string
    return namaLengkap
}
console.log(greeting())

let greeting1 = () => {
    let namea = 14
    let nameb = 15
    let namaLengkapn = namea + nameb

    // hasilnya number karna yg di proses number
    return namaLengkapn
}
console.log(greeting1())

// with parameter
let hello = (a, b) => {
    console.log(`hello ${a + b}`)
}

hello(`yusup`, `hilman`)

// return, digunakan ketika kita ingin memakai sebuah hasil dari sebuah function
// return juga berguna untuk menghentikan function
let angka = () => {
    let w = 2 ** 2

    return w // akan memproses 2 ** 2 hasilnya 4
}
let angka2 = () => {
    let z = 3 ** 2

    return z // akan memproses 3 ** 2 hasilnya 9
}
console.log(angka() + angka2())
// 4 + 9 jadi 13

// contot lain
let angkaa = () => {
    let w1 = 2 ** 2

    console.log(w1) // hanya menampilkan tidak bukan hasil dari proses w1
}
let angka2a = () => {
    let z1 = 3 ** 2

    console.log(z1) // hanya menampilkan tidak bukan hasil dari proses z1
}
console.log(angkaa() + angka2a()) //hasilnya akan Nan

// Parameter and return//
let sum = (input1, input2) => { // input1 dan 2 adalah parameter
    return input1 + input2 // ini proses function, pertambahan karna fungsi yg di gunakan `sum`
}
console.log(sum(5, 2)) // parameter di tulis di sini

// contoh lain
let power = (input3, input4) => { // input3 dan 4 adalah parameter
    return input3 ** input4 // ini proses function, pangkat karna power
}
console.log(power(5, 2)) // parameter di tulis di sini (5 ,2) value untuk memanggil function

// parameter for argument
// parameter --> variable yang kita buat untuk membuat function
// argument --> value yg yang kita buat saat memanggil function 

// default parameter
let sum1 = (a, b, c = 5) => { // c = 5 adalah default parameter, jika argumen c ndak di kasih maka default valuenya 5
    return a + b + c
}
console.log(sum1(3, 4, 3))

// callback function --> suatu function yg di masukkan ke argumen
let minus = (a, b) => {
    return a - b
}
let num = () => {
    return 10
}
console.log(minus(20, num())) // function num di masukkan ke argumen a = 2 b = 10 dari funtion num

// calling other function
let add = (a, b) => {
    return a + b
}
let substraction = (a, b) => {
    return a - b
}
let multiplication = (a, b) => {
    return a * b
}
let devision = (a, b) => {
    return a / b
}
let showresult = (a, b) => {
    console.log(add(a, b))
    console.log(substraction(a, b))
    console.log(multiplication(a, b))
    console.log(devision(a, b))
}
showresult(10, 5) // hasilnya nanti semua di proses

// recursive function --> looping dngn function
// function yg memanggil dirinya sendiri
let countdown = (counter) => {
    console.log(counter)
    counter--
    if (counter >= 0) {
        countdown(counter)
    }
}
countdown(3)
const DaftarBarang = () => {
    let list = `Daftar barang toserba \n`
    // produk.forEach((item, index) => {
    //     list += `${index + 1}. ${item.nama}, kategori ${item.kategori} harga Rp.${item.harga.toLocaleString()}, stok tersedia ${item.stok}, kadar gula ${item.kadarGula}\n`
    // })
    return list
}
console.log(DaftarBarang())