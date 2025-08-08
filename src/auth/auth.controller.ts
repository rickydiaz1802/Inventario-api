import { Body, Controller, Post } from '@nestjs/common';
import { AuthPayLoadDTO } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('login')
    login(@Body() authPayLoad : AuthPayLoadDTO){
        return this.authService.ValidarUsuario(authPayLoad)
    }
}
