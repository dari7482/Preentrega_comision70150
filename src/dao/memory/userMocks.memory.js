import { userGenerator } from "../../services/userGenerator.js"
class UserMocksMemory {
    constructor(quantity) {
        this.quantity = quantity
        this.contacts = []
    }

    async get() {
        console.log('1', this.quantity)
        for (let i = 0; i < this.quantity; i++) {
            const user = await userGenerator();
            console.log(user)
            this.contacts.push(user);
        }
        return this.contacts
    }

    async create(contact) {

        this.contacts.push(contact);
        return contact;
    }
    checkUser = async (user) => {
        console.log('24', user)
        console.log(this.contacts)

        const foundContact = this.contacts.find((item) => item.username === user);
        if (foundContact) {
            console.log('Contacto encontrado:', foundContact);
            return foundContact;
        } else {
            console.log('Contacto no encontrado');
            return null;
        }
    }
    update = (user) => {
        user.pets.push(user._id)
        let doc = { pets: user.pets }
        this.contacts.map((contact) => {
            if (user._id === contact._id) [
                contact.pets.push(user._id, doc)
            ]
        })

        return this.contacts
    }
}

export default UserMocksMemory;