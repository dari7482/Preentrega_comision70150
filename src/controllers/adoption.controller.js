import { getContactService, getPetService, getAddoptionService } from '../repositories/index.js'
import { TIPOS_ERROR } from "../utils/EErrores.js"
import { createCustomError } from "../utils/CustomError.js"


const getAllAdoptions = async (req, res) => {
    let addoptionService = await getAddoptionService()
    const result = await addoptionService.getAll();
    res.send({ status: "success", payload: result })
}

const getAdoption = async (req, res) => {
    const adoptionId = req.params.aid;
    let addoptionService = await getAddoptionService()
    const adoption = await addoptionService.getBy({ _id: adoptionId })
    if (!adoption) return res.status(404).send({ status: "error", error: "Adoption not found" })
    res.send({ status: "success", payload: adoption })


}



const createAdoption = async (req, res) => {
    const { uid, pid } = req.params;

    try {
        const contactService = await getContactService();
        let resultUser = await contactService.checkUser(uid)
        const petService = await getPetService();
        let resultPet = await petService.checkPet(pid)

        if (resultPet.adopted) return res.status(400).send({ status: "error", error: "Pet is already adopted" });
        let resultUserPet = await contactService.updateUser(resultUser)
        let resultPetUser = await petService.updatePet(resultPet, resultUser)
        let addoptionService = await getAddoptionService()
        await addoptionService.create({ owner: resultUserPet._id, pet: resultPetUser._id })
        res.status(200).json({ resultUserPet, resultPetUser });
    } catch (error) {
        console.log('26', error)
        res.status(500).json({ error: createCustomError("Error to generate user", "error", error.message, TIPOS_ERROR.NOT_FOUND) });
    }




    /*const user = await usersService.getUserById(uid);
    if (!user) return res.status(404).send({ status: "error", error: "user Not found" });
    const pet = await petsService.getBy({ _id: pid });
    if (!pet) return res.status(404).send({ status: "error", error: "Pet not found" });
    if (pet.adopted) return res.status(400).send({ status: "error", error: "Pet is already adopted" });
    user.pets.push(pet._id);
    await usersService.update(user._id, { pets: user.pets })
    await petsService.update(pet._id, { adopted: true, owner: user._id })
    await adoptionsService.create({ owner: user._id, pet: pet._id })
    res.send({ status: "success", message: "Pet adopted" })*/
}

export default {
    createAdoption,
    getAllAdoptions,
    getAdoption


}