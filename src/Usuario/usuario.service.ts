import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';

@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(Usuario) private usuarioRepository : Repository<Usuario>) {}

    async modificarFechaActualizacionUsuario(id: number) {
        const hora = new Date(); 
        return this.usuarioRepository.update({ id },{ updatedAt: hora });}
    
    async crearUsuario(usuario : CrearUsuarioDto){
        const usuarioEncontrado = await this.usuarioRepository.findOne({
            where:{email: usuario.email}
        })
        if (usuarioEncontrado){
            return new HttpException('ERROR. Email ya ocupado.',
                HttpStatus.CONFLICT)
        }
        const nuevoUsuario = this.usuarioRepository.create(usuario)
        return this.usuarioRepository.save(nuevoUsuario)
    }

    async obtenerUsuarios(){
        return this.usuarioRepository.find()
    }

    async obtenerUsuario(id: number){
        const usuarioEncontrado = await this.usuarioRepository.findOne({
            where:{id,}
        });
        if(!usuarioEncontrado) {
            return new HttpException('ERROR. Usuario no encontrado', HttpStatus.NOT_FOUND);
        }
        return usuarioEncontrado
    }

    async borrarUsuario(id : number){
        return this.usuarioRepository.delete({id});
    }

    async actualizarUsuario(id:number, usuario: ActualizarUsuarioDto) {
        await this.usuarioRepository.update({id}, usuario);
        return this.modificarFechaActualizacionUsuario(id)
    }
}
