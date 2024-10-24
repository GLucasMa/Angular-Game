import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),serveRoot: '/static/'}),
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: 'root', 
      database: 'angular_game', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      charset: 'utf8mb4',
      }),
    UserModule,
    ],

  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}