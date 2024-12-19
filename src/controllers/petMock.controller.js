import { TIPOS_ERROR } from "../utils/EErrores.js"
import { createCustomError } from "../utils/CustomError.js"
import { petGenerator } from "../services/petGenerator.js"
const getALLpet = (req, res) => {
    let { quantity } = req.params

    if (quantity > 100 || quantity <= 0) {

        return createCustomError("Quantity out of range", "params should be <100 or > 0", "invalid Quantity", TIPOS_ERROR.ARGUMENTOS_INVALIDOS)
    }


    const pets = []

    for (let i = 0; i <= quantity; i++) {
        pets.push(petGenerator())
    }
    res.status(200).json({ pets })
}

export default {
    getALLpet



}