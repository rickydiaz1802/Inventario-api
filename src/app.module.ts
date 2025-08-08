import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './Usuario/usuario.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { CategoriaModule } from './Categoria/categoria.module';
import { ProductoModule } from './Producto/producto.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'contrasena',
      database: 'apiinventariodb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize : true

    }),
    UsuarioModule, CategoriaModule, ProductoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
