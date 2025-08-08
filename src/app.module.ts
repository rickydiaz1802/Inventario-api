import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './Usuario/usuario.module';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Bobafeet180',
      database: 'apiinventariodb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize : true

    }),
    UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
