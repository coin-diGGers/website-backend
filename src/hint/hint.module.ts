import { Module } from '@nestjs/common';
import { HintController } from './hint.controller';
import { HintService } from './hint.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hint } from './entities/hint.entity';
import { AuthGuard } from 'src/admin/authguard/authguard';
import { JwtModule } from '@nestjs/jwt';
import { Treasure } from './entities/treasure.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hint, Treasure]),
    JwtModule.register({
      secret: 'your-secret-key', // 실제 비밀 키로 교체하세요
      signOptions: { expiresIn: '60m' }, // 필요에 따라 설정
    }),
  ],
  controllers: [HintController],
  providers: [HintService, AuthGuard]
})
export class HintModule {}
