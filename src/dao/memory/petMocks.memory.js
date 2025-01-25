import { petGenerator } from "../../services/petGenerator.js"

class PetMocksMemory {
    constructor(quantity) {
        this.quantity = quantity
        this.pets = []
    }

    async get() {
        console.log('1', this.quantity)
        for (let i = 0; i < this.quantity; i++) {
            const pet = await petGenerator();

            this.pets.push(pet);
        }
        return this.pets
    }

    async create(pets) {

        this.pets.push(pets);
        return pets;
    }
    checkPet = async (pet) => {
        console.log('24', pet)
        console.log(this.pets)

        const foundPet = this.pets.find((item) => item.petid === pet);
        if (foundContact) {
            console.log('masctas encontrado:', foundContact);
            return foundPet;
        } else {
            console.log('pet no encontrado');
            return null;
        }




    }
}

export default PetMocksMemory;