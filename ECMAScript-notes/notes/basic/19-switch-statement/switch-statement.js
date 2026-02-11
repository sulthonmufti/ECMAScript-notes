/**
 * SWITCH STATEMENT
 * 
 * kadang kita cuma butuh pake kondisi sederhana di if statement, kaya pake perbandingan ==.
 * Switch statement => percabangan kaya if, tapi lebih sederhana cara buatnya.
 * kondisi switch statement cuma buat perbendingan ==
 */

let nilai = "B";

switch(nilai){
    case "A":
        document.writeln("<p>Anda lulus dengan baik</p>")
        break;
    case "B":
        document.writeln("<p>Anda lulus</p>")
        break;
    case "C":
        document.writeln("<p>Anda mengulang</p>")
        break;
    default:
        document.writeln("<p>Anda salah jurusan</p>")
        break;
}