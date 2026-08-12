/* 
    Tugas DPPLG - Kelas X RPL 3
    Pengenalan JavaScript - Objek Buku

    Nama: Christolius Simamora
*/

const buku = {
    judul: "Belajar JavaScript", // Judul buku (String)
    penulis: "Andi Pratama", // Penulis buku (String)
    tahunTerbit: null, // Tahun terbit buku (null)
    tersedia: true, // Buku tersedia (boolean)
    harga: 125000 // Harga buku (Number)
}

// VVV Menunjukan data buku ke terminal VVV
console.log(`
Judul        : ${buku.judul}
Penulis      : ${buku.penulis}
Tahun Terbit : ${buku.tahunTerbit}
Tersedia     : ${buku.tersedia}
Harga        : ${buku.harga}
`)