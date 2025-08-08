import { Entity, PrimaryGeneratedColumn , Column} from "typeorm"

@Entity({name : 'usuarios'})
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre : string

    @Column({unique: true})
    email : string

    @Column()
    password : string

    @Column({type: 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    createdAt : Date

    @Column({type: 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    updatedAt : Date

    @Column()
    tipo: string

    
}