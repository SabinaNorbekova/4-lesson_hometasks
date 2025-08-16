function task10(tezlik) {
    if(tezlik>=0){
        if(tezlik<50){
            alert("Internet sekin.")
        }else if(tezlik>=50&&tezlik<=100){
            alert("Internet o'rtacha.")
        }else{
            alert("Internet juda tez.")
        }
    }else{
        alert("Xato son kiritdiz")
    }
  }

  let tezlik = Number(prompt("Internet tezligini kiriting (Mbps):"))
  task10(tezlik)