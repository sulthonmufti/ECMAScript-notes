//optional chaining => operator (?) buat mengamankan kalo kalo kita mau mengakses property object dari data nullish.
//kalo kita mau ngakses property object yang datanya nullish tanpa pake optional chaining bisa error.

const person ={};
// const country = person.address.country;
// document.writeln(country); //bakal ERROR, bukan undefined.
document.writeln("TEST"); //gabakal muncul karena Error

//pengecekan dengan if statement
if (person.address !== undefined && person.address !== null) {
    say = person.address.country;
}
// document.writeln(country);

//use optional chaining
let identity = {
    job: {
        fieldOfWork: "Industrial",
        position: "Engineer",
        office: {
            city: "Sapporo",
            country: "Japan"
        }
    }
};
document.writeln(identity?.job?.position);