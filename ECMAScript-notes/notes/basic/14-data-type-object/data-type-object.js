/**
 * Associative array
 * kalo di PHP dll. kan kita  bisa gunain index berupa tipe data lain selain number, kaya string (fitur ini namanya associative array / hash).
 * kalo di JS ga bisa gunain associative array,
 * kalo kita paksa masukin data selain number di index array, akan otomatis diubah jadi Object bukan array lagi, karena beberpa operasi di array mungkin bisa berubah hasilnya.
 */

/**
 * TIPE DATA OBJECT
 * 
 * tipe data object => tipe data mirip kaya array, bedanya index pada tipe object bisa gunain string.
 * index di object biasanya disebut attributes / properties, bukan index
 */
const person = {};

person["name"] = "Muhammad Sulthon Mufti";
person["address"] = "Hokkaido";
person["age"] = 23;
console.table(person);

delete person["age"];
console.table(person);

//membuat object dengan properties
const identity = {
    "full name" : "Muhammad Sulthon Mufti",
    firstName : "Muhammad",
    middleName : "Sulthon",
    lastName : "Mufti",
    address : "Hokkaido Japan",
    age : 23
};
console.table(identity);

//mengakses property object
console.info(`nama tengah: ${identity["full name"]}`);
console.info(`nama belakang: ${identity.lastName}`);
console.info(`alamat: ${identity.address}`);
