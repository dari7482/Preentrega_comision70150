import petModel from './models/pet.models.js'

export default class petMongo {
    constructor() { }

    get = async () => {
        let pets = await petModel.find()
        console.log(pets)
        return pets


    }
    create = async (pet) => {
        let petiD = pet.petid

        let petIdExist = await petModel.findOne({ petid: petiD })

        if (petIdExist) {
            return (false)
        }
        let newPet = await petModel.create(pet);
        return newPet;
    }

    checkPet = async (pet) => {
        console.log('26', pet)
        let petIdExist = await petModel.findOne({ petid: pet }).lean()
        //await userModel.deleteMany({})
        console.log('28 petid', petIdExist)
        return petIdExist


    }
    updatePet = async (pet, user) => {
        return petModel.findByIdAndUpdate(pet._id, { adopted: true, owner: user._id })


    }






}