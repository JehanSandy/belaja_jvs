// App akan memiliki 5 menu Utama 
// 1. menampilkan daftar buah2
// 2. menambah buah 
// 3. menghapus buah 
// 4. membeli buah 
// 5. exit 

// setiap selesai melakukan proses penambahan atau menghapus buah, tampilkan list buah tertentu. 

// user kini dapat memilih buah apa yg hendak di beli, tidak lagi diharuskan memberli semua  buah. 

// saat user sudah menentukan buah apa yang akan di beli, minta user untuk menginput quality yang diinginkan. 

// setiap selesai memilih satu buah untuk di beli, tampilkan isi keranjang dan lakukan konfismasi apakah user ingin membeli buah linnya atau melanjutkan ke proses transaksi berikutnya. 

// gunakan loop (disarankan menggunakan for loop) untuk menghitung total biaya setiap buah yang di beli dan total biaya keseluruhan

/* clue
1. variabel fruit kini berisi array dua dimensi. dimana isi dari array tersebut adalah array juga yang setiap arraynya akan menyimpan informasi nama buah, harga, dan stok buah yang dimiliki

2. membutuhkan satu buah array baru sebagai keranjang. gunanya untuk menyimpan data buah yang dipilih oleh user untuk dibeli. jika user membeli dua macam buah maka array ini akan berisi dua data saja
 */

let list = `Daftar Buah di toko Buah: \n`
            for (let i = 0; i < Produk.length; i++) {
                list += `${i + 1}. ${Produk[i][0]}, Harga ${(Produk[i][1]).toLocaleString()}/kg, stok ${Produk[i][2]}`
            }
            alert(list)