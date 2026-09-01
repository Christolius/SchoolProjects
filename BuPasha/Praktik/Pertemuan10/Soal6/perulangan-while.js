"use strict";
const angka = Number(prompt());
const output = document.getElementById("output");
if (angka && output) {
    let i = 1;
    while (i <= angka) {
        output.innerHTML += String(i) + "<br>";
        i++;
    }
}
