import { TIPOS_ERROR } from "../utils/EErrores.js"
import { createCustomError } from "../utils/CustomError.js"
import { getContactService } from "../repositories/index.js";
import UsersDTO from "../dao/DTO/users.dto.js"
import bcrypt from 'bcrypt'









const getALLuser = async (req, res) => {
    let { quantity } = req.params

    if (quantity > 50 || quantity <= 0) {

        return createCustomError("Quantity out of range", "params should be <50 or > 0", "invalid Quantity", TIPOS_ERROR.ARGUMENTOS_INVALIDOS)
    }

    try {
        const contactService = await getContactService(quantity);

        let result = await contactService.getContacts();
        let resultDTO = new UsersDTO(result).get()

        res.status(200).json({ resultDTO });
    } catch (error) {
        res.status(500).json({ error: createCustomError("Error to generate user", "error", error.message, TIPOS_ERROR.NOT_FOUND) });
    }
}

const createUSer = async (req, res) => {

    const contactService = await getContactService();
    let { firstName, password, userRol } = req.body;
    //let result = await contactService.createContact(contact);

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash('coder123', salt)
    let result = await contactService.createContact(
        {
            user: firstName,
            password: passwordHash,
            role: userRol,
            pets: []
        }
    )

    console.log('52', result)

    let resultDTO = new UsersDTO().create(result)


    res.send({ status: "success", payload: resultDTO });
}



export default {
    getALLuser,
    createUSer


}