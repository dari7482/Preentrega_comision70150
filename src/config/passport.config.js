import passport from "passport"
import local from "passport-local"
import bcrypt from "bcryptjs";
import UsersDTO from "../dao/DTO/users.dto.js"; import jwt from "passport-jwt"

//import { generaHash, validaPass } from "../utils.js"
//import { config } from "./config.js"
import { getContactService } from "../repositories/index.js";

export const initPassport = () => {

    passport.use("registro",
        new local.Strategy(
            {
                // usernameField: "email",
                passReqToCallback: true
            },
            async (req, username, password, done) => {
                console.log('register', username, password)
                try {
                    let { firstName, userRol, pets } = req.body
                    if (!firstName) {
                        console.log(`Faltan datos`)
                        return done(null, false, { info: `Faltan datos` })

                    }
                    const contactService = await getContactService();
                    //let result = await contactService.createContact(contact);

                    const salt = await bcrypt.genSalt(10)
                    const passwordHash = await bcrypt.hash('coder123', salt)

                    let result = await contactService.createContact(
                        {
                            user: firstName,
                            username: username,
                            password: passwordHash,
                            role: userRol,
                            pets: pets
                        }
                    )

                    if (result === false) {
                        return done(null, false, { info: `el usuario ya existe` })


                    }
                    console.log(result)



                    let resultDTO = new UsersDTO().create(result)

                    return done(null, resultDTO)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use("login",
        new local.Strategy(
            {},
            async (username, password, done) => {
                console.log('64', password)
                try {
                    const contactService = await getContactService();
                    let userExist = await contactService.checkUser(username)
                    console.log('67', userExist)
                    if (!userExist) {
                        console.log("No encuentra usuario")
                        return done(null, false)
                    }
                    const validaPass = (password, hash) => {
                        return bcrypt.compareSync(password, hash)
                    }



                    if (!validaPass(password, userExist.password)) {
                        console.log("Password incorrecta")
                        return done(null, false)
                    }

                    return done(null, userExist)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    /*passport.use("jwt",
        new jwt.Strategy(
            {
                secretOrKey: config.SECRET,
                jwtFromRequest: new jwt.ExtractJwt.fromAuthHeaderAsBearerToken()
            },
            async (usuario, done) => {
                try {
                    return done(null, usuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )*/


}
