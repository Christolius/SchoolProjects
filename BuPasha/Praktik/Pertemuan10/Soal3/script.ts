const angka: number = Number(prompt());
const output: HTMLElement | null = document.getElementById("output");

if (angka && output) {
    for (let i:number = angka; i > 0; i--){
        output.innerHTML += String(i)+"<br>";
    }
}