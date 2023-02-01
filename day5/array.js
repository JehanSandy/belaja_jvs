//  array
// syntax
let things = [5, `buku`, true, undefined, null, [], {}]

// akses data
console.log(things[0])

//mengubah data pada array
things[3] = `bolpoin`
console.log(things[3])
console.log(things)

// membuat indeks baru
console.log(things.length)
things[8] = true // panjang length jadi 9 karna penambahan di indek 8 jadi indek 7 otomatis di buatkan spase kosong
console.log(things)
console.log(things.length)

// push and pop
let fruit = [`apel`, `melon`, `pisang`]
fruit.push(`durian`, `kiwi`) // untuk menambah data baru pada inteks terakhir di erray (bisa di tambah lebih dari 1)
console.log(fruit)
fruit.pop() // untuk menghapus data terakhir pada indeks erray
console.log(fruit)

let an = [`gula`, 25, `garam`, [`asam`, 30]]
an.push([`laos`, 35])
console.log(an)
an[3].pop()
console.log(an)

// shift dan unshift
let a = [`kijang`, `wedus`, `kelelawar`]
a.unshift(10, 20) //untuk menambah data baru pada inteks pertama di erray (bisa di tambah lebih dari 1)
console.log(a)
a.shift() // untuk menghapus data pertama pada indeks erray
console.log(a)



// splice (tanya urutan data)
let number = [1, 2, 3, 4, 5, 6]
// (start), deleteCount, Optional ==> memasukkan data baru, bisa tidak
number.splice(1, 3) // menghapus strat dari 1 sebanyak 3 data
console.log(number)

number.splice(1, 3, 5) // menhapus dan mengganti data
console.log(number)

number.splice(2, 0, `insert`, `insert2`) // untuk menyisipkan data di tengah atau sesuai keinginan
console.log(number)

// delete --> menghapus data tanpa menghapus indeks
// let del = [1, 2, 3, 4]
// delete del[1]
// console.log(del)

// slice => untuk mengambil isi array
let c = [1, 2, 3, 4, 5, 6]
let c2 = c.slice(1, 3) // mengambil mulai indeks 1 tapi tidak mengambil indeks terakhir
let c3 = c.slice(2, 4) // mengambil mulai indeks 2 tapi tidak mengambil indeks terakhir
console.log(c2)
console.log(c3)

// includes
let d = [1, 2, 3, 4]
console.log(d.includes(2))
console.log(d.includes(4, 2)) // mencari mulai dari indeks 4 ada 2 atau tidak?? (hasilnya kok false)
console.log(d.includes(6))

// indeksOf --> mencari indek ke berapa
let e = [`buku`, `pencil`, `penggaris`, `boploin`]
console.log(e.indexOf(`penggaris`))
console.log(e.indexOf(`mobil`)) //jika yg di cari tidak ada maka hasilnya -1

// sort --> default ascending
let word = [`pencil`, `car`, `mellon`, `budi`, `andi`]
console.log(word.sort())

let campur = [`word`, 1, true, undefined, null, false, `kancil`, `mobil`, 5, 9, 3, 0, 19,]
console.log(campur.sort())

let f = [1, 3, 4, 7, 2, 6, 5]
console.log(f.sort((a, b) => b - a)) //descending dari besar ke kecil

//reverse
let g=[`pencil`, `car`, `mellon`, `budi`, `andi`]
console.log(g.reverse())

// join --> menggabungkan data di dalam array menjadi string
let h = [`pencil`, `car`, `mellon`, `budi`, `andi`]
console.log(h.join())
console.log(h.join(` `))
console.log(h.join(`/`))

// menggabungkan arry

let array1 = [`pencil`, `car`, `mellon`]
let array2 = [`budi`, `andi`]
let array3 = [`kancil`, `mobil`]

console.log(array1.concat(array3))

// array 2 dimensi
let j = [[1,2], [3,4],[[5,6],[9,10]],7,8]
// mencari item 5
console.log(j[2][0][0])
// mencari item 8
console.log(j[4])
// mencari item 10
console.log([j[2][1][1]])

let coba = [[`Apel`, 10_000, 5], [`anggur`, 15_000, 7], [`jeruk`, 20_000, 9]]
coba.splice(1,1)
console.log(coba)