//string bisa pake "(petik dua), atau '(petik satu)
document.writeln("Muhammad Sulthon Mufti");
document.writeln("<br>");
document.writeln("Learning JavaScript");

document.writeln("<br>===<br>");

//gabungkan beberapa string gunakan operator + (plus)
document.writeln("Nama:" + "Mufti");
document.writeln("<br>");
document.writeln("Muhammad" + "Sulthon" + "Mufti");

document.writeln("<br>===<br>");

/**
 * ESCAPE SEQUENCE
 * JS mendukung escape sequence di string. Escape Sequence => karakter khusus,
 * seperti ENTER, TAB, "(kutip dua), dll.
 * 
 * \n       ENTER
 * \t       TAB
 * \'       '
 * \"       "
 * \\       "
 */
document.writeln("<textarea cols='100' rows='10'>");
document.writeln("Muhammad \nSulthon \nMufti");
document.writeln("\\Home \nSulthon");
document.writeln("\"Home \nSulthon\"");
document.writeln("\'Home \nSulthon\'");
document.writeln("</textarea>");