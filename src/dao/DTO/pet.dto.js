export default class PetDTO {
    constructor(result) {
        this.result = result
    }
    get() {
        const petDto = this.result
        return petDto.map((pet =>

            pet = {
                "_id": pet._id,
                "owner": pet.owner,
                "petid": pet.id,
                "adopted": pet.adopted,
                "age": pet.age,
                "type": pet.type,
                "breed": pet.breed
            }
        ))
    }
    create(pet) {
        const petDtoCreate = {
            "_id": pet._id,
            "owner": pet.owner,
            "petid": pet.id,
            "adopted": pet.adopted,
            "age": pet.age,
            "type": pet.type,
            "breed": pet.breed
        }

        return petDtoCreate
    }
    checkPet(petId) {
        let petId = petId.pet
        petExist = this.result.map((pet) => {
            if (pet.petid === petId) {
                return petId
            }
        })
        return petId
    }
}
