// forEach --> untuk melooping isi array
let array = [`banna`, `orange`, `aple`]
array.forEach(item => {
    console.log(item) // looping mengconsole.log array [banna, orange, aple]
})

let arr = [[`banna`, 10000, 5], [`orange`, 20000, 10], [`aple`, 30000, 15]]
arr.forEach(item => {
    item.forEach(item2 => {
        console.log(item2) //kalau misal buat menyajikan data gimana caranya  ?
    })
})

// map --> untuk mengubah data di dalam array
let arr2 = [1, 2, 3, 4, 5,]
let nwarr = arr2.map((item, i) => {
    if (i % 2 != 0) {
        return item * 2
    } else {
        return item
    }
})
console.log(arr2)
console.log(nwarr)

// filter --> untuk menyaring data di dalam array
let arr3 = [`car`, `fan`, `mouse`, `monitor`]
let nwfil = arr3.filter(item => {
    return item.includes(`a`) // menyaring data string yg ada unsur huruf `a`/ filter hanya ada 1 parameter
    // jenis data boolean (true/false)
})
console.log(nwfil)

let number = [1, 2, 3, 4, 5] //belum paham
let filldup = (arr, cb) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        resCb = cb(arr[i])
        if(resCb){
            newArr.push(arr[i])
        }
    }
}