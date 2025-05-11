import { AppDataSource } from "../config/data-source";
import UserDTO from "../dto/UserDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";
import { credentialUserService } from "./indexCredentialServices";

//const users: IUser[] = [];
//let id: number = 1;

const UserEntity = AppDataSource.getRepository(User)

export const getUsersService = async (): Promise<User[]> => {
  const users = await UserEntity.find({
    relations: { credentials:true, appointments:true },
    order: { id:"ASC" }
  })
  return users;
};

export const getUserIDService = async (user: {id:number | null, email:string | null}): Promise<User | null> => {
  const { id, email } = user;

  interface IWhere {
    id?:number,
    email?:string
  }

  const whereClause:IWhere = {};

  if(id) whereClause.id = id;
  if(email) whereClause.email = email
  const foundUserID = await UserEntity.findOne({
    where: whereClause,
    relations: ["appointments"],
  })
  return foundUserID
};

export const createUserService = async (userData: UserDTO): Promise<User> => {
  const { username, password, name, email, birthdate, nDni } = userData;
  const newCredentials = await credentialUserService({
    username,
    password
  })
  const newUser = UserEntity.create({
    name,
    email,
    birthdate,
    nDni,
    credentials: newCredentials
  });
  newCredentials.user = newUser;
  
  await UserEntity.save(newUser);
  await AppDataSource.getRepository(Credential).save(newCredentials);
  
  return newUser;
};


