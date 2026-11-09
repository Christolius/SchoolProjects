"use strict";
const output = document.getElementById("output");
if (output) {
    const jumlahSiswa = Number(prompt("Masukkan jumlah siswa"));
    let out = "";
    for (let i = 1; i <= jumlahSiswa; i++) {
        const namaSiswa = String(prompt(`Nama siswa ke-${i}`));
        const nilaiSiswa = Number(prompt(`Nilai siswa ke-${i}`));
        let predikat;
        if (nilaiSiswa > 90 && nilaiSiswa <= 100) {
            predikat = "Sangat baik";
        }
        else if (nilaiSiswa > 75 && nilaiSiswa <= 90) {
            predikat = "Baik";
        }
        else if (nilaiSiswa > 50 && nilaiSiswa <= 75) {
            predikat = "Cukup";
        }
        else if (nilaiSiswa > 0 && nilaiSiswa <= 75) {
            predikat = "Kurang";
        }
        else {
            predikat = "Tidak Valid";
        }
        out += `${namaSiswa} nilai ${nilaiSiswa} predikat ${predikat}<br>`;
    }
    output.innerHTML = out;
}
