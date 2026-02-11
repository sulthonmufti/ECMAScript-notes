/**
 * CONSOLE
 * JS punya fitur buat melakukan loggin bernama Console.
 * Logging => mekanisme yang biasa dilakuin programmer buat nempilin informasi dari aplikasi yang sedang berjalan,
 * tanpa harus menggangu alue kerja aplikasi dan juga interaksi user.
 * caranya, gunain fitur Console di JS => gunain perintah console di kode JS.
 */
/**
 * CONSOLE METHOD
 * Console Method        Keterangan
 * colsole.info(...)     Memberitahu informasi
 * colsole.warn(...)     Memberitahu informasi Peringatan
 * colsole.error(...)    Memberitahu informasi error
 * colsole.table(...)    Memberitahu informasi dalam bentuk table
 */

//loggin itu ada levelnya, makin ke bawah makin tinggi
console.debug("debugging"); //level paling dasar tapi jarang dipake (dan default nya debug tidak terlihat di menu console, harus checklist level nya "verbose")

console.info("Hello World");
console.log("test log"); //log sama kaya info

console.warn("this is warning");

console.error("this is error");

