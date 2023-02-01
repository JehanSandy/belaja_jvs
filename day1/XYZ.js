
//kasus XYZ
// let x = 4,
//     y = 3,
//     z = 2

// let w = Math.pow(((x + y * z) / (x * y)), z)
// console.log(w)

//alternatif pangkat a**Z
// let a = (x + y * z) / (x * y)
// let res = a**z
// console.log(res)

// kasus 485hari
let TotalHari = 485,
    tahun = Math.floor(TotalHari / 360),
    SisaTahun = TotalHari % 360,
    bulan = Math.floor(SisaTahun / 30),
    SisaBulan = SisaTahun % 30,
    minggu = Math.floor(SisaBulan / 7),
    hari = SisaBulan % 30
    

// console.log(tahun)
// console.log(SisaTahun)
// console.log(bulan)
// console.log(hari)
console.log(`${tahun} tahun, ${bulan} bulan, ${minggu} minggu, ${hari} hari`)

