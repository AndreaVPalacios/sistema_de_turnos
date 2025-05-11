import { Response, Request, NextFunction } from "express"


export function userMiddleware(req:Request, res:Response, next:NextFunction){
    const { name, email, password, nDni, birthdate, username }= req.body;
    if(!name){
        return res.status(401).json({
            message: "Agrega tu nombre"
        })
    } else if(!email){
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if(!emailRegex.test(email)){
        //  res.status(400).json({message: "Formato de email incorrecto"})

        return res.status(401).json({
            message: "Agrega tu email"
        })
    } else if(!password){
        return res.status(401).json({
            message: "Agrega tu contraseña"
        })
    } else if(!nDni){
        return res.status(401).json({
            message: "Agrega tu nDni"
        })
    } else if(!birthdate){
        return res.status(401).json({
            message: "Agrega tu fecha de nacimiento DD/MM/AAAA"
        })
    } else if(!username){
        return res.status(401).json({
            message: "Agrega tu nombre de usuario"
        })
    }

    next()
}

// export function emailMiddleware(req:Request, res:Response, next:NextFunction){
//     const { name, email, password, nDni, birthdate, username }= req.body;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!emailRegex.test(email)){
//         return res.status(400).json({
//             message: "Formato de email incorrecto"
//         })
//     }
// }



