"use strict";
const angka = Number(prompt());
const output = document.getElementById("output");
if (angka && output) {
    for (let i = 0; i <= angka; i += 2) {
        if (i == 0)
            continue;
        output.innerHTML += String(i) + "<br>";
    }
}
