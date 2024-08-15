import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Treasure } from 'src/hint/entities/treasure.entity';
import { ExtensionController } from './extension.controller';
import { ExtensionService } from './extension.service';

@Module({
    imports: [
    TypeOrmModule.forFeature([Treasure]),
    ],
    controllers: [ExtensionController],
    providers: [ExtensionService]
})
export class ExtensionModule {}
