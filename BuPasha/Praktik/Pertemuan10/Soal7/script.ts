const maxPercobaan : number = Number(prompt("Jumlah Percobaan Maksimal: "));
const percobaan: HTMLElement | null = document.getElementById("percobaan");

if (percobaan && maxPercobaan) {
    let i: number = 0;
    while (i<=maxPercobaan){
        percobaan.innerHTML += "Percobaan ke-"+String(i)+"<br>";
        i++;
    }
}