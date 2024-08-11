import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { JwtModule } from '@nestjs/jwt';  // JWT 모듈 추가
import { Admin } from './adminentity/admin.entity';
import { AuthGuard } from './authguard/authguard';

@Module({
    imports: [
      TypeOrmModule.forFeature([Admin]),
      JwtModule.register({
        secret: 'your-secret-key',  // 비밀 키 설정 (환경 변수로 관리하는 것이 좋음)
        signOptions: { expiresIn: '60m' },  // 토큰 유효기간 설정
      }),
    ],
    controllers: [AdminController],
    providers: [AdminService, AuthGuard]
})
export class AdminModule {}
