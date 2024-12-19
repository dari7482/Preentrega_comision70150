import bcrypt from 'bcrypt'
import { faker } from "@faker-js/faker"


export const userGenerator = async () => {
    const userRol = faker.helpers.arrayElement(['admin', 'user'])
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash('coder123', salt)

    return {
        _id: faker.database.mongodbObjectId(),
        user: faker.person.firstName(),
        password: password,
        role: userRol,
        pets: []
    }
}
