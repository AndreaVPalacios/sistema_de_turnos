import { Column, Entity, Index, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"


@Entity({
    name:"credentials"
})
export class Credential{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index({ unique:true })
    username: string;

    @Column()
    password: string;

    @OneToOne(() => User, (user) => user.credentials)
    user:User;
}