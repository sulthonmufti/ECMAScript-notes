/**
 * OPERATOR ARITMATIKA
 * 
 * Operator         Keterangan
 * +                Pertambahan
 * -                Pengurangan
 * *                Perkalian
 * **               Exponensial
 * /                Pembagian
 * %                Sisa Bagi
 */
let result = 1 + 2;
document.writeln("<p> 1 + 2 = " + result + "</p>");
let originalResult = result;

result = result - 1;
document.writeln("<p>" + originalResult + " - 1  =" + result + "</p>");
originalResult = result;

result = result * 2;
document.writeln("<p>" + originalResult + " * 2  =" + result + "</p>");
originalResult = result;

/**
 * OPERATOR AUTMENTED ASSIGNMENTS
 * Operator Aritmatika          Operator Augmented Assisments
 * result = result + 10         result += 10
 * result = result - 10         result -= 10
 * result = result * 10         result *= 10
 * result = result ** 10        result **= 10
 * result = result / 10         result /= 10
 * result = result % 10         result %= 10
 */
let result2 = 1 + 2;
document.writeln("<p> 1 + 2 = " + result2 + "</p>");
let originalResult2 = result2;

result2 -= 1;
document.writeln("<p>" + originalResult2 + " - 1  =" + result2 + "</p>");
originalResult2 = result2;

result2 *=  2;
document.writeln("<p>" + originalResult2 + " * 2  =" + result2 + "</p>");
originalResult2 = result2;

/**
 * OPERATOR UNARY
 * 
 * Operator         Keterangan
 * +                Menandakan nilai positif
 * -                Menandakan nilai negatif
 * ++               Increment, menaikkan 1 angka
 * --               Decrement, menurunkan 1 angka
 */
let hasil = +1;
document.writeln("<p>" + hasil + "</p>");

hasil--;
document.writeln("<p>" + hasil + "</p>");

hasil++;
document.writeln("<p>" + hasil + "</p>");

hasil = -hasil;
document.writeln("<p>" + hasil + "</p>");