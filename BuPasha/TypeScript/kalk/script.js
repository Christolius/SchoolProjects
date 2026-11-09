"use strict";
const angkaPertama = Number(prompt("Masukkan angka pertama:"));
const operator = prompt("Masukkan operator (+, -, *, /):");
const angkaKedua = Number(prompt("Masukkan angka kedua:"));
const output = document.getElementById("output");
const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali = (a, b) => a * b;
const bagi = (a, b) => a / b;
if (output) {
    if (operator === "+") {
        output.innerHTML = `${angkaPertama} + ${angkaKedua} = ${tambah(angkaPertama, angkaKedua)}`;
    }
    else if (operator === "-") {
        output.innerHTML = `${angkaPertama} - ${angkaKedua} = ${kurang(angkaPertama, angkaKedua)}`;
    }
    else if (operator === "*") {
        output.innerHTML = `${angkaPertama} * ${angkaKedua} = ${kali(angkaPertama, angkaKedua)}`;
    }
    else if (operator === "/") {
        if (angkaKedua === 0) {
            output.innerHTML = "Pembagian dengan nol tidak diperbolehkan.";
        }
        else {
            output.innerHTML = `${angkaPertama} / ${angkaKedua} = ${bagi(angkaPertama, angkaKedua)}`;
        }
    }
    else {
        output.innerHTML = "Operator tidak valid.";
    }
}
