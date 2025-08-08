import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { Usuario } from 'src/Usuario/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    PassportModule,
    JwtModule.register({
    secret: 'orupets12919078310897',
    signOptions: {expiresIn: '2h'}
  }),],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]

})
export class AuthModule {}
