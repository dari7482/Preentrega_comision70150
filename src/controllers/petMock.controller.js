import { faker } from "@faker-js/faker"
import { types, dogBreeds, catBreeds } from "../utils/pets.js"
import { TIPOS_ERROR } from "../utils/EErrores.js"
import { createCustomError } from "../utils/CustomError.js"
const getALLpet = (req, res) => {
    let { quantity } = req.params

    if (quantity > 100 || quantity <= 0) {

        return createCustomError("Quantity out of range", "params should be <100 or > 0", "invalid Quantity", TIPOS_ERROR.ARGUMENTOS_INVALIDOS)
    }

    const petGenerator = (i) => {
        const type = faker.helpers.arrayElement(types)
        const breed = type === 'Dog' ? faker.helpers.arrayElement(dogBreeds) : faker.helpers.arrayElement(catBreeds)
        return {
            id: i,
            owner: "",
            adopted: false,
            age: faker.number.int({ min: 1, max: 20 }),
            type: type,
            breed: breed
        }
    }
    const pets = []

    for (let i = 0; i <= quantity; i++) {
        pets.push(petGenerator(i))
    }
    res.status(200).json({ pets })
}

export default {
    getALLpet



}