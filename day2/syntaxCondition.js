// let umur = 17
// if (umur >= 18) console.log(`Sim akan segera dibuat`) // satu kondisi

// if (umur >= 18) { //dua kondisi di terima dan di tolak
//     console.log(`Sim akan segera dibuat`)
// }else {
//     console.log(`Permohonan SIM di tolak`)
// }

// let  weight = 51
// if (weight < 50){ // ada 3 kondisi
//     console.log(`Mohon tingkatkan berat badan anda`) // kalau berat badan kurang dari 50 hasilnya ini
// } else if (weight >= 50 && weight <= 60) { 
//     console.log(`Selamat kamu di terima`) // kalau berat badan range 50-60 maka hasilnya ini
// } else {
//     console.log(`Mohon kurangi berat badan`) // kalau berat badan lebih dari 60 maka hasilnya ini
// }
  
//if else
let grade = 10 // kenapa di video data tipe nya di buat string ?
// if  (grade >=85 && grade <=100){
//     console.log(`Grade A`)
// } else if (grade >=75 && grade <=84){
//     console.log(`Grade B`)
// } else if (grade >=60 && grade <=74){
//     console.log(`Grade C`)
// } else if (grade >=1 && grade <=59){
//     console.log(`Grade D`)
// } else {
//     console.log(`grade E`)
// }

// Swich case
// let a = 1
// switch (a) {
//     case (1):
//         console.log(`kamu punya 1`)
//         break
//     case (2):
//         console.log(`kamu punya 2`)
//         break
//     case (3):
//         console.log(`kamu punya 3`)
//         break
//     default:
//         console.log(`tidak jelas`)
// }

// switch case
switch (true){
    case (grade >=85 && grade <=100):
        console.log(`Grade A`)
        break
    case (grade >=75 && grade <=84):
        console.log(`Grade B`)
        break
    case (grade >=60 && grade <=74):
        console.log(`Grade C`)
        break
    case (grade >=1 && grade <=59):
        console.log(`Grade D`)
        break
    default:
        console.log(`E`)
}