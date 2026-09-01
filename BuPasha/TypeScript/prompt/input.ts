const nama: string | null = prompt("Name ");

const elm: HTMLElement | null = document.getElementById("output");
if (elm != null && nama != null) {
    elm.innerHTML = `Hello, ${nama}!`;
}