/**
 * STRING TEMPLATE
 * sebelumnya kan kalo kita mau nambahin string dengan data lain kita pake operator + (plus).
 * tapi di kasus tertentu kaya misal udah banyak malah penggunaan operator + (plus) ini bakal nyusahin,
 * jadi kita bisa gunain fitur JS yang namanya String Template. dimana kita bisa subsitusiin data dari luar string-
 * ke dalam string, kaya misal ngambil data variable atau engga ngelakuin operasi aritmatika.
 * cara pake string template nya gunain `(backtick), bukan '(petik satu) atau "(petik dua).
 */
const template = `Name : `;

//menambil variable
const namaku = "Muhammad Sulthon Mufti";
const myName = `Name : ${namaku}`;

console.log(myName);

//Expression di string template
const value = 88;
const expression = `Name ; ${namaku}, Lulus: ${value > 75}`;

console.log(expression);

//Multiline String
const multiline =`
    test multiline string,
    learning JS,
    Muhammad Sulthon Mufti
`;
document.writeln("<pre>")
document.writeln(multiline);
document.writeln("</pre>")