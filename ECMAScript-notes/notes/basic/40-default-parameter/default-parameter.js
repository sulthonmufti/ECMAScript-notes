//kan parameter di JS itu optional ya, tapi kita juga bisa tentuin kalau misal ada parameter-
//yang kosong/undefined kita bisa buat default value nya

function register(name, gender = "UNKNOWN"){
    console.log(name);
    console.log(gender);
}
register();
register("Muhammad Sulthon Mufti");
register("Muhammad Sulthon Mufti", undefined);
register("Muhammad Sulthon Mufti", null);
register("Muhammad Sulthon Mufti", "Male");