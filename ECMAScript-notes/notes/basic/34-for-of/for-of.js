//for of => melakukan iterasi terhadap isi value dari iterable object, kaya array/string/dll.
//for of gabisa dipake buat data object, soalnya object bukan iterable

//array
const names = ["Muhammad", "Sulthon", "Mufti"];
for (const name of names) {
    document.writeln(`<p>${name}</p>`);
}

//string
const stringName = "Muhammad Sulthon Mufti";
for (const character of stringName) {
    document.writeln(`<p>${character}</p>`);
}