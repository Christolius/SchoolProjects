"use strict";
const maxPercobaan = Number(prompt("Jumlah Percobaan Maksimal: "));
const percobaan = document.getElementById("percobaan");
if (percobaan && maxPercobaan) {
    let i = 0;
    while (i <= maxPercobaan) {
        percobaan.innerHTML += "Percobaan ke-" + String(i) + "<br>";
        i++;
    }
}
