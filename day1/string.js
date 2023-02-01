// string
let str = "javascript"

// escape character
let a = "wait, I'll be in there a second"
console.log(a)
let b = 'wait, I\'ll be in there a second'
console.log(b)
let c = `wait, I'll be in there a second`
console.log(c)
let d = "hello \n guys" // \n untuk membuat garis baru atau enter
console.log(d)
let e = "hello \t guys" // \t untuk tap 
console.log(e) 


let FirstName = "Nicola"
let LastName = "sadjoli"
console.log(FirstName + LastName)
console.log(FirstName + "\t" + LastName)

let angka = `8` // angka di temukan dengan string menang string
let str2 = 12
console.log(angka + str2, typeof (angka + str2))

let first_name = `naufal`
let last_name = `saputra`
console.log(`${first_name} ${last_name}`)

//string propetis dan metod
let x = `hello world`
console.log(x.length) // menghitung panjang dari sebuah string
console.log(x.indexOf(`world`)) // mencari indeks dari sebuah kata
console.log(x.substring(6, 3)) // harus,e output wor
console.log(x.slice(6, 11)) //output "world"
console.log(x.split(' ')) //output hello world
console.log(x.split(`l`))


let y = `hello`
let z = `WORLD`
console.log(y.toUpperCase())
console.log(z.toLowerCase())
console.log(y.replace(/l/g, `n`)) // regEx untuk cari hurup `l` secara global (g) di ganti dengan n
console.log(y.replace(`ll`, `n`))

//mengganti 2 huruf
let res = y.replace(`e`, `n`)
let res2 = res.replace(`o`, `n`)
console.log(res2)

let text = `hello world`
console.log(text.includes(`hello`))
console.log(text.includes(`hellow`)) //case sensitif, beda hurup hasilnya false