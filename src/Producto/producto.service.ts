import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
import { CrearCategoriaDto } from './dto/crear-categoria.dto';
import { ActualizarCategoriaDto } from './dto/actualizar-categoria.dto';

@Injectable()
export class CategoriaService {

    constructor(@InjectRepository(Categoria) private categoriaRepository : Repository<Categoria>) {}

    async crearCategoria(categoria : CrearCategoriaDto){
        const categoriaEncontrada = await this.categoriaRepository.findOne({
            where:{nombre: categoria.nombre}
        })
        if (categoriaEncontrada){
            return new HttpException('ERROR. El nombre de la categoría ya está ocupado.',
                HttpStatus.CONFLICT)
        }
        const nuevaCategoria = this.categoriaRepository.create(categoria)
        return this.categoriaRepository.save(nuevaCategoria)
    }

    async obtenerCategorias(){
        return this.categoriaRepository.find()
    }

    async obtenerCategoria(id: number){
        const categoriaEncontrada = await this.categoriaRepository.findOne({
            where:{id,}
        });
        if(!categoriaEncontrada) {
            return new HttpException('ERROR. Categoria no encontrada', HttpStatus.NOT_FOUND);
        }
        return categoriaEncontrada
    }

    async borrarCategoria(id : number){
        return this.categoriaRepository.delete({id});
    }

    async actualizarCategoria(id:number, categoria: ActualizarCategoriaDto) {
        return this.categoriaRepository.update({id}, categoria)
    }
}
