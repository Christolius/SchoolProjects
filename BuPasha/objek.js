const siswa = {
    nama: "Budi",
    kelas: "X RPL 3",
    hobi: "Makan"
}
console.log(`${siswa.nama}\n${siswa.kelas}\n${siswa.hobi}`)
console.log(`${siswa['nama']}\n${siswa['kelas']}\n${siswa['hobi']}`)

siswa.kelas = "XI RPL 3"
siswa.citaCita = "Pilot"

for (const key in siswa){
    console.log(`${key}: ${siswa[key]}`)
}