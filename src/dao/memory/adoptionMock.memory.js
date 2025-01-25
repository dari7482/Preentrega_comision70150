import { adoptionGenerator } from "../../services/adoptionGeneration.js"
class adoptionMocksMemory {
    constructor() {
        this.quantity = 10
        this.adoption = []
    }

    async get() {
        console.log('1', this.quantity)
        for (let i = 0; i < this.quantity; i++) {
            const adoption = await adoptionGenerator();

            this.adoption.push(adoption);
        }
        return this.adoption
    }
    async save(doc) {
        this.adoption.push(doc);
        return this.adoption;
    }
    /*update = (id,doc) => {
        user.pets.push(user._id)
        let doc = { pets: user.pets }
        this.contacts.map((contact) => {
            if (user._id === contact._id) [
                contact.pets.push(user._id, doc)
            ]
        })

        return this.contacts
    }*/
}

export default adoptionMocksMemory;