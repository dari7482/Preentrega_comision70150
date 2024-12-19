import { TIPOS_ERROR } from "../utils/EErrores.js"
import { createCustomError } from "../utils/CustomError.js"
import { userGenerator } from "../services/userGenerator.js"
import { petGenerator } from "../services/petGenerator.js"


const createGenerateData = async (req, res) => {
    const { user, pet } = req.query
    console.log(user, pet)

    if (user > 50 || user <= 0 || pet > 100 || pet <= 0) {

        return createCustomError("Quantity out of range", "params should be <50 or > 0", "invalid Quantity", TIPOS_ERROR.ARGUMENTOS_INVALIDOS)
    }

    const users = [];

    try {
        for (let i = 0; i < user; i++) {
            const user = await userGenerator();
            users.push(user);
        }


    } catch (error) {
        res.status(500).json({ error: createCustomError("Error to generate user", "Error to generate user", "error", TIPOS_ERROR.NOT_FOUND) });
    }

    const pets = []
    try {
        for (let i = 0; i <= pet; i++) {
            pets.push(petGenerator())

        }
    } catch {
        res.status(500).json({ error: createCustomError("Error to generate user", "Error to generate user", "error", TIPOS_ERROR.NOT_FOUND) });

    }

    res.status(200).json({ users, pets });

    res.send('ok')
}


export default {
    createGenerateData

}