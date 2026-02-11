/**
 * OPERATOR PERBANDINGAN
 * 
 * Operator         Keterangan
 * >                Lebih dari
 * <                Kurang dari
 * >=               Lebih dari sama dengan
 * <=               kurang dari sama dengan
 * ==               Sama dengan
 * ===              Sama dengan dan sama tipe
 * !=               Tidak sama dengan
 * !==              Tidak sama dengan atau tidak sama tipe
 */
let compare = 5 == "5"; //true
document.writeln("<p>" + compare + "</p>");

let compare2 = 5 === "5"; //false
document.writeln("<p>" + compare2 + "</p>");

let compare3 = 5 > 5; //false
document.writeln("<p>" + compare3 + "</p>");

let compare4 = 5 > 10; //true
document.writeln("<p>" + compare4 + "</p>");