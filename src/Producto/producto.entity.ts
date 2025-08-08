import { Categoria } from "src/Categoria/categoria.entity"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"

@Entity({name : 'productos'})
export class Producto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre : string

    @Column({unique: true})
    descripcion : string

    @Column('float')
    precio: number

    @Column()
    stock: number

    @Column()
    categoria_id: number

    @ManyToOne(() => Categoria, categoria => categoria.productos)
    categoria: Categoria

    @Column({type: 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    createdAt : Date

    @Column({type: 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    updatedAt : Date
    
}