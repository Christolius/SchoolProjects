const output: HTMLElement | null = document.getElementById("output");
const amt: number = Number(prompt("amt: "));

let hasil:string = "";
if (amt && output){
    for (let x:number=2; x<amt; x++){
        for (let s:number=1; s<amt-x; s++){
            hasil += "."
        }
        for (let y:number=1; y<x; y++){
            hasil += `${x}`;
        }
        hasil += "<br>";
    }
    output.innerHTML = hasil;
}