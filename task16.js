function task16(sum) {
    if(sum>=500){
        price = sum - sum*0.1
        alert("10 foiz chegirmani qo'lgan kiritdiz. Yangi narx: " + price)
    }else{
        alert("Afsuski, chegirma berilmadi. To'lov summasi: " + sum)
    }
  }
  let sum = Number(prompt("Xarid summasi(sum): "))
  task16(sum)