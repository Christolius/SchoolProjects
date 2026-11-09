const output: HTMLElement | null = document.getElementById("output");

if (output){
    const jumlahSiswa: number = Number(prompt("Masukkan jumlah siswa"));
    let namaSiswa = [];
    let nilaiSiswa = [];

    for (let i=0; i<jumlahSiswa; i++){
        const nama: string | null = prompt(`Masukkan nama siswa ke-${i}`);
        const nilai: number = Number(prompt(`Masukkan nilai siswa ke-${i}`));
        namaSiswa[i] = nama;
        nilaiSiswa[i] = nilai;
    }

    let out = "";
    for (let i=0; i<jumlahSiswa; i++){
        const nama = namaSiswa[i];
        const nilai = nilaiSiswa[i];
        out += `Nilai Siswa di Index ${i}: ${nama} dengan nilai ${nilai}<br>`;
    }
    output.innerHTML = out;

    const idx: number = Number(prompt("Pilih index siswa"));
    const nama = namaSiswa[idx];
    const nilai = nilaiSiswa[idx];
    out += `Index yang dipilih adalah: [${idx}] ${nama} = ${nilai}<br>`
    output.innerHTML = out;
}
