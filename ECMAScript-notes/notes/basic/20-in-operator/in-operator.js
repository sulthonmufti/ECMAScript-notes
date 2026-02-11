//in operator => operator buat ngecek apakah sebuah property ada di dalam object atau engga.
//outputnya boolean.
//selain object, bisa juga buat cek di array.

const person ={
    first_name: "Muhammad",
    middle_name: "Sulthon",
    last_name: "Mufti"
}

const result = "first_name" in person; //true
document.writeln(`<p>${result}</p>`);

//or

if ("middle_name" in person) {
    alert(`Hello ${result}!`);
} else {
    alert("Hello");
}

//WARNING: in properti ini cuma bakal ngecek property atau index "ada atau engga",
//bukan ngejek value nya. jadi kalau bisa itu undefined atau null bakal tetep dianggep ada
const brand ={
    brandName: undefined
}
const check = "brandName" in brand; // tetep TRUE walau undefined
document.writeln(check);

const array = [null, "Mufti", null];
const checknull = "array" in array; // tetep TRUE walau null
document.writeln(checknull);