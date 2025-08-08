import { Controller, Post, Get, Param, Body, ParseIntPipe, Delete, Patch, UseGuards} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto.entity';
import { CrearProductoDto } from './dto/crear-producto.dto';
import { ActualizarProductoDto } from './dto/actualizar-producto.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('productos')
export class ProductoController {
    constructor(private productoService: ProductoService) {}

    @Get()
    obtenerProductos(): Promise <Producto[]>{
        return this.productoService.obtenerProductos();
    }

    @Get(':id')
    obtenerProducto(@Param('id', ParseIntPipe) id: number)
     {
        return this.productoService.obtenerProducto(id);
    }

    @Get('categoria/:id')
    obtenerProductosPorCategoria(@Param('id') cat : number)
     {
        return this.productoService.buscarPorCategoria(cat);
    }

    @Get('buscar/:nombre')
    obtenerProductoPorNombre(@Param('nombre') nombre : string)
     {
        return this.productoService.buscarPorNombre(nombre);
    }

    @Post()
    crearProducto(@Body() nuevoProducto: CrearProductoDto) {
        return this.productoService.crearProducto(nuevoProducto);
    }

    @Delete(':id')
    borrarProducto(@Param('id', ParseIntPipe) id: number){
        this.productoService.borrarProducto(id)
    }

    @Patch(':id')
    actualizarProducto(@Param('id', ParseIntPipe) id:number, @Body()
    producto : ActualizarProductoDto) {
        this.productoService.actualizarProducto(id, producto)
    }

    @Patch(':id/incrementar')
    agregarStock(@Param('id', ParseIntPipe) id: number, @Body('cantidad') cantidad : number ) {
            this.productoService.agregarStock(id, cantidad);
        }

    @Patch(':id/reducir')
    quitarStock(@Param('id', ParseIntPipe) id: number, @Body('cantidad') cantidad : number ) {
            this.productoService.quitarStock(id, cantidad);
        }
}
