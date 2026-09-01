"use strict";
const angka = Number(prompt());
const output = document.getElementById("output");
if (angka && output) {
    for (let i = 1; i <= angka; i++) {
        output.innerHTML += String(i) + "<br>";
    }
}
