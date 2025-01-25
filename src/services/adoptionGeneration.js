import bcrypt from 'bcrypt'
import { faker } from "@faker-js/faker"


export const adoptionGenerator = async () => {


    return {
        _id: faker.database.mongodbObjectId(),
        owner: faker.database.mongodbObjectId(),
        pet: faker.database.mongodbObjectId(),



    }
}
