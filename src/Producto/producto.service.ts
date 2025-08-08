import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CrearProductoDto } from './dto/crear-producto.dto';
import { ActualizarProductoDto } from './dto/actualizar-producto.dto';

@Injectable()
export class ProductoService {

    constructor(@InjectRepository(Producto) private productoRepository : Repository<Producto>) {}

    async modificarFechaActualizacion(id: number) {
        const hora = new Date(); 
        return this.productoRepository.update({ id },{ updatedAt: hora });}

    async crearProducto(producto : CrearProductoDto){
        const productoEncontrado = await this.productoRepository.findOne({
            where:{nombre: producto.nombre}
        })
        if (productoEncontrado){
            return new HttpException('ERROR. El nombre del producto ya está ocupado.',
                HttpStatus.CONFLICT)
        }
        const nuevoProducto = this.productoRepository.create(producto)
        return this.productoRepository.save(nuevoProducto)
    }

    async obtenerProductos(){
        return this.productoRepository.find()
    }

    async obtenerProducto(id: number){
        const productoEncontrado = await this.productoRepository.findOne({
            where:{id,}
        });
        if(!productoEncontrado) {
            return new HttpException('ERROR. Producto no encontrado.', HttpStatus.NOT_FOUND);
        }
        return productoEncontrado
    }

    async buscarPorCategoria(id: number){
        return this.productoRepository.find({where:{categoria_id : id} })
    }

    async buscarPorNombre(nombreBuscar: string){
        const productoEncontrado = await this.productoRepository.findOne({
            where:{nombre : nombreBuscar}
        });
        if(!productoEncontrado) {
            return new HttpException('ERROR. Producto no encontrado.', HttpStatus.NOT_FOUND);
        }
        return productoEncontrado
    }

    async borrarProducto(id : number){
        return this.productoRepository.delete({id});
    }

    async actualizarProducto(id:number, producto: ActualizarProductoDto) {
        await this.productoRepository.update({id}, producto)
        return this.modificarFechaActualizacion(id);
    }

    async agregarStock(id:number, cantidad: number){
        await this.productoRepository.increment({id}, 'stock', cantidad);
        return this.modificarFechaActualizacion(id);
    }

    async quitarStock(id:number, cantidad: number){
        await this.productoRepository.decrement({id}, 'stock', cantidad);
        return this.modificarFechaActualizacion(id);
    }
}
