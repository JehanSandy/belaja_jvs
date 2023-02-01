
    // let massa = 67, 
    //     tinggi = 1.78

    // let IMT = Math.pow((massa/tinggi),2)
    
    // if (IMT < 18.5){
    //     console.log(`Massa ${massa} tinggi ${tinggi} IMT ${IMT} Berat Badan Kurang`)
    // } else if (IMT  >= 18.5 && IMT <=24.9){
    //     console.log(`Massa ${massa} tinggi ${tinggi} IMT ${IMT} Berat Badan Ideal`)
    // } else if (IMT  >= 25.0 && IMT <=29.9){
    //     console.log(`Massa ${massa} tinggi ${tinggi} IMT ${IMT} Berat Badan Berlebih`)
    // } else if (IMT  >= 30.0 && IMT <=39.9){
    //     console.log(`Massa ${massa} tinggi ${tinggi} IMT ${IMT} Berat Badan Sangat Berlebih`)
    // } else  {
    //     console.log(`Massa ${massa} tinggi ${tinggi} IMT ${IMT} Obesitas`)
    // }

    let massa = 50, 
        tinggi = 1.78,
        IMT = massa / (tinggi ** 2),
        notif = `Massa ${massa} Kg dan Tinggi ${tinggi} M \n`
        // notif2 = 'Massa ${massa} Kg dan Tinggi ${tinggi} M \n'
    
    if (IMT < 18.5){
        notif += `IMT = ${IMT}, Berat badan anda Kurang`
    } else if (IMT  >= 18.5 && IMT <=24.9){
        notif += `IMT = ${IMT}, Berat badan anda Ideal`
    } else if (IMT  >= 25.0 && IMT <=29.9){
        notif += `IMT = ${IMT}, Berat badan anda Berlebih`
    } else if (IMT  >= 30.0 && IMT <=39.9){
        notif += `IMT = ${IMT}, Berat badan anda Sangat Berlebih`
    } else  {
        notif += `IMT = ${IMT}, Anda Obesitas`
    }
    console.log(notif)

    // let h = 2
    // h = h + 5 // h += 5
    // console.log(h)
   
    // let h = 2
    // h += 5 
    // console.log(h)