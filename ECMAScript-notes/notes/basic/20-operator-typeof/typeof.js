//typeof => operator buat melihat type data sebuah value/variable.

let data;
if (typeof data === "number") {
    alert("Number");
}else if(typeof data === "string"){
    alert("String");
}else if(typeof data === "boolean"){
    alert("Boolean");
}else if(typeof data === "object"){
    alert("Object");
}

let circle = 100;
const cek = typeof circle;
document.writeln(`<p>${cek}</p>`)