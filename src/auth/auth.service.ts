import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthPayLoadDTO } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/Usuario/usuario.entity';

@Injectable()
export class AuthService {

    constructor(private jwtService : JwtService, 
        @InjectRepository(Usuario) private usuarioRepository : Repository<Usuario>){}

    async ValidarUsuario({email, password}: AuthPayLoadDTO ) {
        const usuario = await this.usuarioRepository.findOne({where : {email}});
        if (!usuario) {throw new HttpException('Usuario no encontrado', HttpStatus.UNAUTHORIZED);}
        if (password !== usuario.password) {
            throw new HttpException('Contraseña incorrecta.', HttpStatus.UNAUTHORIZED);
        }
        const payload = {sub: usuario.id, email: usuario.email};
        return{
            access_token: this.jwtService.sign(payload)
        }
    }

}
