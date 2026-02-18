//break bisa buat menghentikan sebuah perulangan
//continue bisa buat menghentikan perulangan saat ini, trus alnjutin perulangan selanjutnya

//break
let counter = 1;
while (true) {
    document.writeln(`<p>Perulangan ke ${counter}</p>`);
    counter++;

    if (counter > 10) {
        break;
    }
}

//continue
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    document.writeln(`<p>Perulangan ganjil ${i}</p>`);
}