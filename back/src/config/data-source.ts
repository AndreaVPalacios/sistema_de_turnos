import {DataSource} from "typeorm"
import {DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DB} from "./envs"
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Appointment } from "../entities/Appointment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DB,
    dropSchema:false,
    synchronize: true,
    logging: true,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})

export const initializeDataSource = async () => {
    try {
        const connection = await AppDataSource.initialize();
        if(connection.isInitialized) console.log("Connected to Database");
    } catch (error) {
        console.log(error);
    }
}