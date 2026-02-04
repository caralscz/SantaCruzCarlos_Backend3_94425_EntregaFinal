// --------------------------------------------------------------------
// src/mocks/pets.mocks.js
// utilizamos faker para generar registros falsos para pruebas
// usamos la versión en español https://fakerjs.dev/guide/localization.html
// --------------------------------------------------------------------

import { fakerES } from "@faker-js/faker";

const generatePetsMocks = (cant) =>{ 
    const pets = []
    for(let i = 0; i < cant; i++){
        const pet = createPet()
        pets.push(pet)
    }
    return pets;
}

const createPet = ()=>{
    const specie = fakerES.helpers.arrayElement([
        "Perro","Gato","Pez","Chancho","Conejo","Tortuga"    ]);

    const pet = {
        _id : fakerES.database.mongodbObjectId(),
        name: fakerES.animal.petName(),
        specie,
        birthDate: fakerES.date.birthdate(),
        adopted:false,
        // Cargo la dirección de una imagen random - No es la de la mascota (por ahora)
        image: `https://picsum.photos/seed/${specie}-${fakerES.string.uuid()}/300/200`
    }
    return pet;
}

export default generatePetsMocks;