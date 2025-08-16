function task5(ball) {
    if(ball>=0&&ball<=100){
        if(ball>=90&&ball<100){
            alert("A")
        }else if(ball>=80&&ball<=89){
            alert("B")
        }else if(ball>=70&&ball<=79){
            alert("C")
        }else if(ball>=60&&ball<=69){
            alert("D")
        }else{
            alert("F")
        }
    }else{
        alert("Ballni xato kiritdingiz!")
    }
  }

  let ball=Number(prompt("Balingizni kiriting: "))
  task5(ball)