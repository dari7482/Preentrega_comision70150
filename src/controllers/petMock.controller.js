import { TIPOS_ERROR } from "../utils/EErrores.js"
import { createCustomError } from "../utils/CustomError.js"
import { petGenerator } from "../services/petGenerator.js"
import { getPetService } from "../repositories/index.js"

const getALLpet = async (req, res) => {
    let { quantity } = req.params
    const petService = await getPetService(quantity);
    let result = await petService.getPets()
    console.log(result)

    res.status(200).json({ result })
}


const createPet = async (req, res) => {
    let { owner, adopted, petid, age, type, breed } = req.body


    const petService = await getPetService();
    let result = await petService.createPet({
        owner,
        adopted,
        petid,
        age,
        type,
        breed
    })

    console.log('30', result)
    res.status(200).json({ result })



}

export default {
    getALLpet,
    createPet



}