const angka: number = Number(prompt());
const output: HTMLElement | null = document.getElementById("output");

if (angka && output) {
    for (let i:number = 1; i <= angka; i++){
        output.innerHTML += String(i)+"<br>";
    }
}