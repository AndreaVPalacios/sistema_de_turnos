import { Request, Response } from "express";
import { Credential } from "../entities/Credential";
import ICredential from "../interfaces/ICredential";
import CredentialDto from "../dto/CredentialDto";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

const CredentialEntity = AppDataSource.getRepository(Credential)

export const credentialUserService = async(credentials:CredentialDto): Promise<Credential> => {
  const {username,password} = credentials
    const newCredentials = CredentialEntity.create({
        username,
        password,
    })
    await CredentialEntity.save(newCredentials)
  return newCredentials;
}

    
export const checkCredentials = async (credentials:CredentialDto): Promise<User | undefined> => {
  const {username,password} = credentials;
  const foundUser = await CredentialEntity.findOne({
    where:{username},
    relations:["user"]
  })
  if(foundUser?.password === password) return foundUser?.user
}

