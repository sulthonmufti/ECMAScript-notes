/**
 * FALSY / FALSEY
 * => value yang ketika dalam konteks boolean dia dianggp false.
 * 
 * Data Falsy
 * Data dianggap Falsy      Keterangan
 * false                    Boolean false
 * 0, -0                    Number 0 dan -0 dianggap false
 * "",'',``                 Semua string kosong dianggap false
 * null                     null dianggap false
 * undefined                undefined dianggap false
 * NaN                      Not a Number dianggap false
 */

//Truthy => kebalikan dengan Falsy

let data = ""; //Falsy
if(data){
    document.writeln("TRUE");
}else{
    document.writeln("FALSE");
}

let array = [1, 2, 3]; //Truthy, (kalau array[]/object{} tetap dianggap Truthy)
if(array){
    document.writeln("TRUE");
}else{
    document.writeln("FALSE");
}