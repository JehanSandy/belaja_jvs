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
