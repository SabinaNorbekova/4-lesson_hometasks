function task18(summa, stavka, yil) {
    let foiz = (summa * stavka * yil) / 100;
    alert("Natija: " + foiz + " sum");
  }
let summa = Number(prompt("Asosiy summani kiriting (so'm):"));
let stavka = Number(prompt("Foiz stavkasini kiriting (%):"));
let yil = Number(prompt("Yilni kiriting:"));
task18(summa, stavka, yil);
  