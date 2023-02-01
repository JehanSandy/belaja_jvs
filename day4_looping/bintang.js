// let res2 = ``
// for (let i = 0; i < 5; i++) {
//     res2 += `*` + `\n`
//     console.log(res2)
// }

let number = [1, 2, 3, 4, 5, 6]
// (start), deleteCount, Optional ==> memasukkan data baru, bisa tidak
// number.splice(1, 3) // menghapus strat dari 1 sebanyak 3 data
// console.log(number)

number.splice(1, 3, 5) // menhapus dan mengganti data
console.log(number)

number.splice(2, 0, `insert`, `insert2`) // untuk menyisipkan data di tengah atau sesuai keinginan
console.log(number)