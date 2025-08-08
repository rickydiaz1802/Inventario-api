import { Controller, Post, Get, Param, Body, ParseIntPipe, Delete, Patch} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';
import { CrearCategoriaDto } from './dto/crear-categoria.dto';
import { ActualizarCategoriaDto } from './dto/actualizar-categoria.dto';


@Controller('categorias')
export class CategoriaController {
    constructor(private categoriaService: CategoriaService) {}

    @Get()
    obtenerCategorias(): Promise <Categoria[]>{
        return this.categoriaService.obtenerCategorias();
    }

    @Get(':id')
    obtenerCategoria(@Param('id', ParseIntPipe) id: number)
     {
        return this.categoriaService.obtenerCategoria(id);
    }

    @Post()
    crearCategoria(@Body() nuevaCategoria: CrearCategoriaDto) {
        return this.categoriaService.crearCategoria(nuevaCategoria);
    }

    @Delete(':id')
    borrarCategoria(@Param('id', ParseIntPipe) id: number){
        this.categoriaService.borrarCategoria(id)
    }

    @Patch(':id')
    actualizarCategoria(@Param('id', ParseIntPipe) id:number, @Body()
    categoria : ActualizarCategoriaDto) {
        this.categoriaService.actualizarCategoria(id, categoria)
    }
}
