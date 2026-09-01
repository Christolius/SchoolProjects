"use strict";
const angka = Number(prompt());
const table = document.getElementById("table");
if (angka && table) {
    let i = 0;
    while (i < 10) {
        i++;
        const tr = document.createElement("tr");
        const perkalian = document.createElement("td");
        const hasil = document.createElement("td");
        perkalian.innerHTML = String(angka) + " x " + String(i);
        hasil.innerHTML = String(angka * i);
        tr.append(perkalian, hasil);
        table.append(tr);
    }
}
