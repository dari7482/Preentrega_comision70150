import { faker } from "@faker-js/faker"
import { types, dogBreeds, catBreeds } from "../utils/pets.js"

const getALLpet = (req, res) => {
    console.log(types)

    console.log(req.params.quantity)

    const petGenerator = () => {
        return {
            owner: "",
            adopted: false,
            age: faker.number.int({ min: 1, max: 100 }),
            animal: faker.animal






        }


    }

    console.log(petGenerator())



    res.send('hola')





}

export default {
    getALLpet



}