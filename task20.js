function task20(a, b, c) {
    let max = a; 
    if (b > max) {
      max = b;
    }
    if (c > max) {
      max = c;
    }
    alert ("Eng katta son: " + max);
  }
  let a = Number(prompt("a = "));
  let b = Number(prompt("b = "));
  let c = Number(prompt("c = "));
  task20(a, b, c)