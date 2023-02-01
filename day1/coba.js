// // let x = `hello world`
// // console.log(x.length) // menghitung panjang dari sebuah string output 11
// // console.log(x.indexOf(`world`)) // mencari indeks dari sebuah kata
// // console.log(x.substring(6, 3)) 
// // console.log(x.substr(6, 3)) // harus,e output wor 
// // console.log(x.slice(6, 11)) //output "world" 
// // //console.log(x.split(' ')) //output hello world
// // console.log(x.split(`l`))
// // console.log(x.split(`w`))

// // // h1e2l3l4o56w7o8r9l10d11

// let data6 = {
//     name: "john",
//     age: 12,
//     singgle: true
// }
// console.log(data6)

// // array
// let data7 = ["john", "x", 12, true]
// console.log(data7)

// let ATB = ["Aple", Apel, "x", "Rp. 10.000", res_Aple, true]
// console.log(ATB)
let daftarBuah = `selamat berbelanja \n`

let arr = [[`banna`, 10000, 5], [`orange`, 20000, 10], [`aple`, 30000, 15]]

// arr.forEach(function(e, i) {
//     daftarBuah += `buah ${arr[i][0]} harga ${arr[i][1]} stok ${arr[i][2]}`
//     console.log(daftarBuah)
// })

arr.forEach((item, indeks) => {
    daftarBuah += `${indeks + 1}. buah ${item[0]}, harga ${item[1]}, stok ${item[2]} \n`

})
console.log(daftarBuah)

const DaftarBuah = () => {
    let daftarBuah = `selamat berbelanja \n`
    arr.forEach((item, indeks) => {
        daftarBuah += `${indeks + 1}. buah ${item[0]}, harga ${item[1]}, stok ${item[2]} \n`

    })
    console.log(daftarBuah)
}

DaftarBuah()