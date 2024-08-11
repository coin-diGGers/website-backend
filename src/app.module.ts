import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HintModule } from './hint/hint.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeOrmConfig } from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './config/database.config';

@Module({
  imports: [
    HintModule,
    ConfigModule.forRoot({
      isGlobal: true, 
    }),  
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
