//operator logika adalah operator untuk dua buah boolean.
//hasil dari operator logika adalah boolean lagi

/**
 * OPERATOR LOGIKA
 * 
 * Operator         Keterangan
 * &&               DAN
 * ||               ATAU
 * !                Kebalikan
 */

/**
 * OPERATOR &&
 * Nilai 1      Operator        Nilai 2     Hasil
 * true         &&              true        true
 * true         &&              false       false
 * false        &&              true        false
 * false        &&              false       false
 */

/**
 * OPERATOR ||
 * Nilai 1      Operator        Nilai 2     Hasil
 * true         ||              true        true
 * true         ||              false       true
 * false        ||              true        true
 * false        ||              false       false
 */

/**
 * OPERATOR UNARY !
 * Operator        Nilai 2     Hasil
 * !               true        false
 * !               false       true
 */

const nilaiUjian = 70;
const nilaiAbsensi = 70;

const lulusUjian = nilai > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = lulusUjian && lulusAbsensi;
document.writeln("<p>" + lulus + "</p>");