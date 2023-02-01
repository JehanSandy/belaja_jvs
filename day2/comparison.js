console.log(5>2) //5 lebih besar dari 2 (true)
console.log(5<2) //5 lebih kecil dari 2 (false)
console.log(5 >= 5) //lima lebih besar / sama dengan lima (true)
console.log(5<=5) //lima lebih kecil / sama dengan lima (true)
console.log(5 == `5`) // lima (number) sama dengan lima (string) (true) bisa gitu karn valuenya sama" lima walaupun beda tipe data
console.log(5===`5`) // lima (number) di bandingkan dengan lima (string) outputnya "false" karna perbadingan sampai di tipe data (string beda sama number)
console.log(5!=5) // 5 (number) tidak sama dengan 5 (number) "false"
console.log(5!=`5`) // 5 (number) tidak sama dengan 5 (string) karna valuenya sama" 5 "false"
console.log(5!==`5`) // 5 (number) tidak sama dengan 5 (string) outputnya "true" karna 5 (number) beda jenis data sama `5` (string)
console.log(1<2 && 1<3) // (1 lebih kecil dari 2) dan (1 lebih kecil dari 3), output "true" karna keduanya "true"
console.log(1<2 && 3<2) // (1 lebih kecil dari 2) dan (3 lebih kecil dari 2), output "fales" karna (3 lebih besar dari 2 flase)
console.log(1<2 || 3<2) // (1 lebih kecil dari 2) dan (3 lebih kecil dari 1) output "true" krn salah satu benar (or), kalau keduanya salah jadi "false"
console.log(!true) // tidak benar "false"
console.log(null == undefined) // ouputnya "true" krna "null" dan "undefined" sama" emtpy meski beda value
console.log(null === undefined) // outpunya "false" krn "null" dan "undefine" meski baluenya sama" emtpy tapi beda tipe data null--> benar" kosong, undefined--> ada isi tapi kosong