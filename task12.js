function task12 (age, type) {
    if(age>=18 && type =='yengil'){
        alert("Siz yengil avtomobil boshqarishingiz mumkin.")
    }else if(age>=18 && type =='yuk'){
        alert("Siz yuk avtomobil boshqarishingiz mumkin.")
    }else{
        alert("Hozirda siz avtomobil boshqara olmaysiz")
    }
  }
  let age = Number(prompt("Yoshingiz nechida? "))
  let type = prompt("Avtomobil turi (yengil yoki yuk)? ")
  task12(age, type)