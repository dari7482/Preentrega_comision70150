import { Contacts, Pets, Addoption } from "../dao/factory.js";
import ContactRepository from "./User.repository.js"
import PetRepository from "./Pet.repository.js"
import AddoptionRepository from "./Adoption.repository.js"

let contactService;
let petService
let addoptionService

async function getContactService(quantity) {

    if (!contactService) {
        console.log('contactservice')
        if (!Contacts) {
            throw new Error("Contacts not initialized");
        }
        contactService = new ContactRepository(new Contacts(quantity));
    }

    return contactService;
}

async function getPetService(quantity) {

    if (!petService) {

        if (!Pets) {
            throw new Error("pets not initialized");
        }
        petService = new PetRepository(new Pets(quantity));

    }

    return petService;
}

async function getAddoptionService() {
    if (!addoptionService) {

        if (!Addoption) {
            throw new Error("addpt not initialized");
        }
        addoptionService = new AddoptionRepository(new Addoption());

    }

    return addoptionService;
}




export {

    getContactService,
    getPetService,
    getAddoptionService
};
