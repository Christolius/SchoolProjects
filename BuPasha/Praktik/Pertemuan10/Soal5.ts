/*
    For memiliki tiga bagian yaitu inisialisasi, kondisi, dan increment/decrement.
    - Bagian inisialisasi berfungsi untuk mendeklarasi variabel yang akan di increment/decrement.
    - Bagian konsidi berfungsi untuk mengecek apakah variabel yang telah dideklarasikan sudah memenuhi kondisi yang di tentukan.
    - Bagian increment/decrement adalah instruksi yang akan dijalankan ketika bagian kondisi adalah true.
*/
// CONTOH:
for (let variabel: number = 0; variabel <= 10; variabel++){
    console.log(variabel);
}
/*
    Bagian inisialisasi pada for loop diatas adalah "let variabel: number = 0" yang berarti loopnya dimulai dari 0.
    Bagian kondisinya adalah "variabel <= 10" yang mengecek jika variabel lebih kecil atau sama dengan dari 10.
    Bagian incrementnya adalah "variabel++" yang akan menambah 1 kepada variabel.
*/