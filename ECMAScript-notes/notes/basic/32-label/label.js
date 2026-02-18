//label => penanda yang bisa dipake dengan break dan continue (sebenernya jarang dipake).
//default nya kalo kita pake break/continue, kan bakal melakukan perilangan dimana kode break/continue itu dipake,
//kalo pake label, kita bisa melakukan break/continue ke perualngan yang kita mau, asal perulangan kita pake label
//caranya pake nama label diikutin titik dua (:)

loopi:
    for (let i = 0; i < 100; i++) {
        loopj:
            for (let j = 0; j < 10; j++) {
                if (j = 10) {
                    continue loopi;
                }
                console.info(`${i} - ${j}`);
                
            }
        
    }