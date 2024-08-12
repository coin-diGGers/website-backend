import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,
        private readonly jwtService: JwtService,
    ) {}

    async adminLogin(body): Promise<any> {
        const { id, pw } = body;

        const admin = await this.adminRepository.findOne({ where: { id } });

        if (!admin || admin.pw !== pw) {
            throw new HttpException('Invalid credentials', 401);
        }

        // JWT 토큰 생성
        const token = this.jwtService.sign({ admin_id: admin.admin_id });
        return { token };
    }
}
