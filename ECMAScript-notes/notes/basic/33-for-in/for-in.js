//for in => mengiterasi seluruh data property di object / index di array
//for in bisa di pake buat array  tapi ga direkomendasiin soalnya jarang butuh data index di array, array bagusnya pake "for of"

//object
const person = {
    //property: value
    firstName: "Muhammad",
    middleName: "Sulthon",
    lastName: "Mufti"
};

for (const property in person) {
    document.writeln(`<p>Property ${property} : ${person[property]}</p>`);
}

//array (tidak direkomendasikan)
const names = ["Muhammad", "Sulthon", "Mufti"];
for (const index in names) {
    document.writeln(`<p>Property ${index} : ${names[index]}</p>`);
    
}