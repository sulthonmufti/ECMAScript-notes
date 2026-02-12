//nullish => null and undefined
//nullish => operator (??) mirip ternary operator, bedanya di kondisinya, kalo bernilai null / undefined baru value default nya diambil.

let parameter;
let data = parameter;
//without nullish
if (data === undefined || data == null) {
    data = "Nilai Default";
}
document.writeln(`<p>${data}</p>`);

//use nullish
let parameter2;
let data2 = parameter2 ?? "Nilai Default";
document.writeln(`<p>${data2}</p>`);