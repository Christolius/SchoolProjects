"use strict";
const output = document.getElementById("output");
const amt = Number(prompt("amt: "));
let hasil = "";
if (amt && output) {
    for (let x = 2; x < amt; x++) {
        for (let s = 1; s < amt - x; s++) {
            hasil += ".";
        }
        for (let y = 1; y < x; y++) {
            hasil += `${x}`;
        }
        hasil += "<br>";
    }
    output.innerHTML = hasil;
}
