"use strict";
const p = 12;
const l = 5;
function luasPersegi(panjang, lebar) {
    return panjang * lebar;
}
function kelilingPersegi(panjang, lebar) {
    return 2 * (panjang + lebar);
}
const output = document.getElementById("output");
if (output) {
    output.innerHTML += `=== PERSEGI PANJANG ===<br><br>Panjang: ${p}<br>Lebar: ${l}<br><br>`;
    output.innerHTML += `Luas     : ${luasPersegi(p, l)}<br>`;
    output.innerHTML += `Keliling : ${kelilingPersegi(p, l)}<br>`;
}
