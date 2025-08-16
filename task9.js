function task9(namlik) {
    if(namlik<=100&&namlik>=1){
        if(namlik < 30){
            alert("Havo juda quruq.")
        }else if(namlik>=30&&namlik<=59){
            alert( "Havo qulay.")
        }else{
            alert("Havo nam.")
        }
    }
  }

  let namlik = Number(prompt("Havoning namlik foizini kiriting"))
  task9(namlik)