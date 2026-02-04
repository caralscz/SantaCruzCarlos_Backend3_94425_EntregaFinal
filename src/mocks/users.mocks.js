// --------------------------------------------------------------------
// src/mocks/users.mocks.js
// utilizamos faker para generar registros falsos para pruebas
// usamos la versión en español https://fakerjs.dev/guide/localization.html
// --------------------------------------------------------------------

import { fakerES } from "@faker-js/faker";
import { createHash } from "../utils/index.js"; // para encriptar la password

 const generateUsersMocks = async (cant) => {
    try {
        // password fija de acuerdo a la consigna
        const hashedpassword = await createHash("coder123")  
        const users = []
        for (let i = 0; i < cant; i++) {
            const user = createUserMocks(hashedpassword);
            users.push(user)
        }
        return users
    } catch (err) {
        console.log("Error creando mosck de users", err.message)
    }
}

const createUserMocks = (password) => {
        const user = {
            _id: fakerES.database.mongodbObjectId(),
            first_name: fakerES.person.firstName(),
            last_name: fakerES.person.lastName(),
            email: fakerES.internet.email(),
            role: fakerES.helpers.arrayElement(['user', 'admin']),
            password: password,
            pets: []
        }
        return user
}
export default generateUsersMocks