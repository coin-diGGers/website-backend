import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HintModule } from './hint/hint.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database.config';

@Module({
  imports: [HintModule, TypeOrmModule.forRoot(typeOrmConfig),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
