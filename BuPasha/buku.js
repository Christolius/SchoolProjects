/* 
    Tugas DPPLG - Kelas X RPL 3
    Pengenalan JavaScript - Objek Buku

    Nama: Christolius Simamora
*/

const buku = {
    judul: "Belajar JavaScript", // Judul buku
    penulis: "Andi Pratama", // Penulis buku
    tahunTerbit: null, // Tahun terbit buku
    tersedia: true, // Buku tersedia
    harga: 125000 // Harga buku
}

// VVV Menunjukan data buku ke terminal VVV
console.log(`
Judul        : ${buku.judul}
Penulis      : ${buku.penulis}
Tahun Terbit : ${buku.tahunTerbit}
Tersedia     : ${buku.tersedia}
Harga        : ${buku.harga}
`)