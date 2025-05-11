import { Request, Response } from "express";
import IUser from "../interfaces/IUser";
import {
  createUserService,
  getUsersService,
} from "../services/indexUsersServices";
import { getUserIDService } from "../services/indexUsersServices";
import { checkCredentials } from "../services/indexCredentialServices";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allUsers = await getUsersService();
     return allUsers
    ?res.status(200).json({
      message: "Aqui te muestro todos los usuarios",
      allUsers,
    }):
    res.status(404).json({message:"No hay usuarios registrados"})
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un pequeño error en la app",
    });
  }
};

export const getUserID = async (req:Request, res:Response): Promise<Response> => {
  try {
    const { id } = req.params
  const userByID = await getUserIDService({id:Number(id), email:null})
  return userByID
  ?res.status(201).json(userByID)
  :res.status(404).json({ message:"Este usuario no existe"})
  } catch (error) {
    return res.status(500).json({
      message: "No se pudo encontrar este ID"
    })
  }
  
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, password, nDni, birthdate, username } = req.body;

    const foundUserByEmail = await getUserIDService({id:null, email});
    if(foundUserByEmail){
    return  res.status(400).json({ message: "Ya existe un usuario con este email"});
    }

    const newUser = await createUserService({
      name,
      email,
      password,
      nDni,
      birthdate,
      username,
    });
    return res.status(201).json(newUser); 
  } catch (error) {
      return res.status(500).json({
      message: "No se pudo crear el usuario",
    });
    
  }
   
};

export const loginUser = async (req:Request, res:Response): Promise<Response> => {
  try {
    const {username,password} = req.body
    const credentialsCheckers = await checkCredentials({username,password})
    return credentialsCheckers
      ? res.status(200).json({ login: true, user: credentialsCheckers})
      : res.status(400).json({ login: false });
  } catch (error) {
    return res.status(500).json({
      message:"Usuario no encontrado"
    })
  }
};
