//with statement => untuk menurunkan sebuah scope data,
//jadi kita bisa mengakses property dalam sebuah data tanpa harus nyebutin datanya

//tanpa with statement
const person = {
    firstName: "Muhammad",
    middleName: "Sulthon",
    lastName: "Mufti"
}
console.log(person.firstName);
console.log(person.middleName);
console.log(person.lastName);

//pakai with statement
const job = {
    field : "Industrial",
    position: "Engineer",
    office: "london"
};
// with(job){
//     console.log(field);
//     console.log(position);
//     console.log(office);
// }

/**
 * NOTE:
 * fitur with statement (comment) di atas error (with statement is not allowed in strict mode),
 * soalnya di ES6 fitur with ini tidak direkomendasiin lagi karna ambigu dan rawan bug, gantinya bisa pake "destructuring".
 */
//kalo pake destructuring:
const { field, position, office } = job;
    console.log(field);
    console.log(position);
    console.log(office);