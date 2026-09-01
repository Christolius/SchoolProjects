"use strict";
const angka = Number(prompt());
const output = document.getElementById("output");
if (angka && output) {
    for (let i = angka; i > 0; i--) {
        output.innerHTML += String(i) + "<br>";
    }
}
