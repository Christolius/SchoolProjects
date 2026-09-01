const angka: number = Number(prompt());
const output: HTMLElement | null = document.getElementById("output");

if (angka && output) {
    for (let i:number = 0; i <= angka; i+=2){
        if (i==0) continue;
        output.innerHTML += String(i)+"<br>";
    }
}