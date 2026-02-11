var fullName;
var firstName;
var middleName;
var lastName;

fullName = "Muhammad Sulthon";
fullName = "Muhammad Sulthon Mufti"; //bisa diubah-ubah lagi
firstName = "Muhammad";
middleName = "Sulthon";
lastName = "Mufti";

//bikin variable langsung dengan isi valuenya
var hello = "Hello world";

//use the variable
document.writeln(fullName);
document.writeln(firstName + middleName + lastName);

/**
 * KATA KUNCI let DAN const
 * sebelum tahun 2015, kata untuk membuat variable bisa kita menggunakan kata kunci var.
 * tapi setepah tahun 2015 sejak versi ECMAScript 2015, diperkenalkan kata kunci baru untuk membuat variable, let dan const.
 * JS sekarang tidak merekomendasikan lagi gunakan kata kunvi var untuk membuat variable,
 * tapi diganti dengan let. hal ini karena ada masalah desain awal var.
 */