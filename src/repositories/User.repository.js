export default class ContactRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getContacts = async () => {
        let result = await this.dao.get();
        return result;
    }
    createContact = async (contact) => {
        //let contactToInsert = new ContactDTO(contact);
        let result = await this.dao.create(contact);
        return result
    }
    checkUser = async (contact) => {
        //let contactToInsert = new ContactDTO(contact);
        let result = await this.dao.checkUser(contact);
        return result
    }
    updateUser = async (user) => {
        let result = await this.dao.updateUser(user);
        return result

    }
}