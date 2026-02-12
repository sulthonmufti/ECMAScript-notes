//operator logika di non boolean
//sebelumnya kan kita tahu kalo operator logika && (AND) sama || (OR) buat dua data boolean.
//di JS kita bisa pake && sama || buat tipe data non boolean

/**
 * OPERATOR OR (||) di Non Boolean
 * => dibaca dari kiri ke kanan
 * => ngambil nilai pertama yang truthy
 * => kalo gaada yang bernilai truthy, akan diambil yang terakhir (kanan)
 */
console.info("Hello" || ""); //yang diambil "Hello" soalnya truthy
console.info("" || []) //"" yg diambil [] karna truthy, "" bernilai falsy
console.info("0" || "NOL"); //0, truthy || truthy
console.info(0 || "NOL"); //NOL, falsy || truthy
console.info(null || "NULL"); //"NULL", falsy || truthy
console.info(undefined || "UNDEFINED"); //"UNDEFINED", falsy || truthy
console.info(0 || false); //false, falsy || falsy

//contoh implementasi
const person = {
    firstName: "Muhammad",
    middleName: "Sulthon",
    lastName: "Mufti"
};
//ngambil nama dari firsName, kalo gaada (falsy) ngambil dari lastName
const myname = person.firstName || person.middleName;
console.info(myname);

//persis nullish(??), tapi kalau nullish kan kalau datanya null/undefined. kalau operator non bolean kalau datanya falsy.
//kalo nullish kan gini:
const nama = person.firstName ?? person.middleName;
//nullish kalo di console.info() gaakan dan datanya selain null/undefined (data-data falsy)bakal munculin string kosong, jadi lebih aman pake logika non boolean


/**
 * OPERATOR AND (&&) di Non Boolean
 * => kebalikan dari operator OR (||)
 * => dibaca dari kiri ke kanan
 * => ngambil nilai pertama yang falsy
 * => kalo gaada yang bernilai falsy, akan diambil yang terakhir (kanan)
 */
console.info("Hello" && ''); //''
console.info("" && []) //""
console.info("0" && "NOL"); //NOL
console.info(0 && "NOL"); //0
console.info(null && "NULL"); //null
console.info(undefined && "UNDEFINED"); //undefined
console.info("undefined" && "null"); //null