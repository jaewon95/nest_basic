import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodosModule } from './todos/todos.module';
import { Todo } from './todos/entities/todo.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory : (configService: ConfigService) =>({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username : 'root',
        password: configService.get('DB_PASSWORD'),
        database: 'test',
        entities : [Todo], // 테이블 생성, 매핑
        synchronize : true,
      }),
      inject: [ConfigService], // ConfigService 주입
      
    }),

    TodosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

