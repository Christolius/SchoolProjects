const op: string = "+";

switch (op) {
    case "+":
        console.log("Penjumlahan");
        break;
    case "/":
        console.log("Pembagian");
        break;
    case "*":
        console.log("Perkalian");
        break;
    case "-":
        console.log("Pengurangan");
        break;
    case "%":
        console.log("Modulus");
        break;
    case "**":
        console.log("Perpangkatan");
        break;
    default:
        console.log("Input tidak valid.");
}

if (op==="+") {
    console.log("Penjumlahan");
} else if (op==="-") {
    console.log("Pembagian");
} else if (op==="*"){
    console.log("Perkalian");
} else if (op==="/"){
    console.log("Pengurangan");
} else if (op==="%"){
    console.log("Modulus");
} else if (op==="**"){
    console.log("Perpangkatan")
}