import { Entity, PrimaryGeneratedColumn , Column} from "typeorm"

@Entity({name : 'categorias'})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre : string

    @Column({unique: true})
    descripcion : string
    
    @Column({type: 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    createdAt : Date

    @Column({type: 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    updatedAt : Date

    
}