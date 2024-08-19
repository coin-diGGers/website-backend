import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Treasure } from 'src/hint/entities/treasure.entity';
import { ExtensionController } from './extension.controller';
import { ExtensionService } from './extension.service';
import { Hint } from 'src/hint/entities/hint.entity';

@Module({
    imports: [
    TypeOrmModule.forFeature([Treasure, Hint]),
    ],
    controllers: [ExtensionController],
    providers: [ExtensionService],
    exports: [ExtensionService], 
})
export class ExtensionModule {}
