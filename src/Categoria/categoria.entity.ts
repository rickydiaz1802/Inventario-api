import { Producto } from "src/Producto/producto.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"

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

    @OneToMany(() => Producto, producto => producto.categoria)
    productos : Producto[]

    
}