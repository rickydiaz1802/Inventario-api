import { Controller, Post, Get, Param, Body, ParseIntPipe, Delete, Patch, UseGuards} from '@nestjs/common';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}

    @Get()
    obtenerUsuarios(): Promise <Usuario[]>{
        return this.usuarioService.obtenerUsuarios();
    }

    @Get(':id')
    obtenerUsuario(@Param('id', ParseIntPipe) id: number)
     {
        return this.usuarioService.obtenerUsuario(id);
    }

    @Post()
    crearUsuario(@Body() nuevoUsuario: CrearUsuarioDto) {
        return this.usuarioService.crearUsuario(nuevoUsuario);
    }

    @Delete(':id')
    borrarUsuario(@Param('id', ParseIntPipe) id: number){
        this.usuarioService.borrarUsuario(id)
    }

    @Patch(':id')
    actualizarUsuario(@Param('id', ParseIntPipe) id:number, @Body()
    usuario : ActualizarUsuarioDto) {
        this.usuarioService.actualizarUsuario(id, usuario)
    }
}
