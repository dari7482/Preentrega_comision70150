export default class PetRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getPets = async () => {
        console.log('6', this.dao)
        let result = await this.dao.get();
        console.log('5', result)
        return result;
    }
    createPet = async (pet) => {
        console.log(pet)
        //let contactToInsert = new ContactDTO(contact);
        let result = await this.dao.create(pet);
        return result
    }
    checkPet = async (pet) => {
        //let contactToInsert = new ContactDTO(contact);
        let result = await this.dao.checkPet(pet);
        return result
    }
    updatePet = async (pet, user) => {
        console.log(pet, 'dao')
        //let contactToInsert = new ContactDTO(contact);
        let result = await this.dao.updatePet(pet, user);
        return result
    }
}