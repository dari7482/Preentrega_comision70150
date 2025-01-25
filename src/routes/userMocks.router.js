import { Router } from "express";
import passport from "passport"
import userMockController from "../controllers/userMock.controller.js";
import UsersDTO from "../dao/DTO/users.dto.js";


const router = Router()
console.log('route')
router.get('/mokingUser/:quantity', userMockController.getALLuser)
router.post('/mokingUser', passport.authenticate("registro", { session: false }), (req, res) => {

    console.log('11', req.user)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({ status: "Registro Exitoso", usuarioRegistrado: req.user })

})
router.post("/mokingUser/login", passport.authenticate("login", { session: false }), (req, res) => {

    let usuarioLogueado = new UsersDTO(req.user)
    //let usuarioLogueado = req.user

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({
        payload: "Login exitoso",
        usuarioLogueado,

    });
})

export default router;