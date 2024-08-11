import { Module } from '@nestjs/common';
import { HintController } from './hint.controller';
import { HintService } from './hint.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hint } from './entities/hint.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hint]),
  ],
  controllers: [HintController],
  providers: [HintService]
})
export class HintModule {}
