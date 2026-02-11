const value1 = "1"; //string
const value2 = 1; //number
const sum = value1 + value2; //11 bukan 2, karena value1 bertype string

document.writeln(sum);

document.writeln("<br>");

/**
 * MELAKUKAN KONVERSI STRING DAN NUMBER
 * 
 * Function                 Keretangan
 * parseInt(string)         Mengkonversi dari string ke number (bilangan bulat)
 * parseFloat(string)       Mengkonversi dari string ke number (bilangan pecahan)
 * Number(string)           Mengkonversi dari string ke number (bilangan bulat atau pecahan)
 * number.toString()        Mengkonversi dari nnumber ke string
 */
const value3 = parseInt("1"); //number
const value4 = 5;
const sum2 = value3 + value4; //hasilnya 6
document.writeln(sum2);

document.writeln("<br>");

document.writeln(`<p>${parseInt("1.1")}</p>`); //hasilnya 1, karena akan dikonversi ke bilangan bulat
document.writeln(`<p>${parseFloat("1.1")}</p>`); //float 1.1
document.writeln(`<p>${Number("1.1")}</p>`); //float 1.1

const a = 1;
const b = 1;
const total = a.toString() + b.toString();
document.writeln(total); //hasilnya 11 karena dikonversi jadi string

/**
 * NaN
 * 
 * kalo ternyata data string yang kita coba konversiin ke number itu bukan data yang valid,
 * maka hasil konversinya adalah NaN (Not a Number).
 * NaN => number spesial yang nyebutin kalo ini bukan number.
 * kalo NaN dioperasiin sama data number lain, hasilnya tetep jadi NaN.
 */
document.writeln(`<p>${parseInt("salah")}</p>`); //NaN
document.writeln(`<p>${parseFloat("1.1text")}</p>`); //1.1

//Number() gaakan tolelir kesalahan di data
document.writeln(`<p>${Number("1.1ups")}</p>`); //NaN
document.writeln(`<p>${Number("1x")}</p>`); //NaN
document.writeln(`<p>${Number("bukan number")}</p>`); //NaN

//operasi pada NaN
const nan1 = Number("salah"); //NaN
const number2 = 100;
const sum3 = nan1 + number2; //NaN
document.writeln(`<p>operasi pada NaN: ${sum3}</p>`);


//MENGECEK NILAI NaN - isNaN() Function
const cekNaN = "number";
document.writeln(`<p>operasi pada NaN: ${isNaN(cekNaN)}</p>`); //TRUE: berarti NaN
