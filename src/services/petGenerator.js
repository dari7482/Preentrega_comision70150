import { faker } from "@faker-js/faker"
import { types, dogBreeds, catBreeds } from "../utils/pets.js"

export const petGenerator = () => {
    const type = faker.helpers.arrayElement(types)
    const breed = type === 'Dog' ? faker.helpers.arrayElement(dogBreeds) : faker.helpers.arrayElement(catBreeds)
    return {
        _id: faker.database.mongodbObjectId(),
        owner: "",
        adopted: false,
        age: faker.number.int({ min: 1, max: 20 }),
        type: type,
        breed: breed
    }
}