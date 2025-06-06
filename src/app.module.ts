import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HintModule } from './hint/hint.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeOrmConfig } from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './config/database.config';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { AdminModule } from './admin/admin.module';
import { ExtensionController } from './extension/extension.controller';
import { ExtensionService } from './extension/extension.service';
import { ExtensionModule } from './extension/extension.module';

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
    AdminModule, ExtensionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
