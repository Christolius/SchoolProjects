const output: HTMLElement | null = document.getElementById("output");

if (!output) {
    alert("Output tidak ditemukan");
}

const jumlahBarang: string | null = prompt("Jumlah barang:");

let hasil:string = "";
if (jumlahBarang && Number(jumlahBarang) >= 1 && Number(jumlahBarang) <= 10) {
    let totalHarga:number = 0;
    for (let i:number = 1; i < Number(jumlahBarang)+1; i++){
        const namaBarang:string | null = prompt(`Nama barang ${i}: `);
        const hargaBarang:number = Number(prompt(`Harga barang ${i}:`));
        if (!hargaBarang || hargaBarang < 1){
            hasil+=`${namaBarang} - Harga tidak valid<br>`;
            continue;
        }
        totalHarga+=hargaBarang;
        hasil+=`${namaBarang} harga Rp${hargaBarang}<br>`;
    }
    hasil+=`Total harga: ${totalHarga}<br>`
    const rata2:number = totalHarga/Number(jumlahBarang)
    hasil+=`Rata-rata harga: Rp${rata2}<br>`
} else {
    hasil+="Jumlah barang harus diantara 1 sampai 10.<br>";
}

if (output) {
    output.innerHTML = hasil;
}