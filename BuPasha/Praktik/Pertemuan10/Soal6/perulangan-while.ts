const angka: number = Number(prompt());
const output: HTMLElement | null = document.getElementById("output");

if (angka && output) {
    let i: number = 1;
    while (i<=angka){
        output.innerHTML += String(i)+"<br>";
        i++;
    }
}