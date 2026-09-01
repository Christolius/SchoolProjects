"use strict";
const nama = prompt("Name ");
const elm = document.getElementById("output");
if (elm != null && nama != null) {
    elm.innerHTML = `Hello, ${nama}!`;
}
