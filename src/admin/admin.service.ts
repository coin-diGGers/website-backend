import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './admin.entity.ts/admin.entity';
import { Repository } from 'typeorm';
import { Hint } from 'src/hint/entities/hint.entity';

@Injectable()
export class AdminService {
    // constructor(
    //     @InjectRepository(Admin)
    //     private adminRepository: Repository<Admin>,
    //     @InjectRepository(Hint)
    //     private hintRepository: Repository<Hint>,
    //   ) {}

    //   async adminLogin(body): Promise<any> {
    //     try {
    //         const adminInfo = await this.adminRepository.find()

    //         const isAdmin = body
            
    //         //만약 db에 있는 adminInfo와 사용자가 입력한 isAdmin이 같으면 로그인
    //         if (adminInfo.id !== isAdmin.id && adminInfo.pw !== isAdmin.pw) {

    //         }
    //     } catch (error) {
    //     throw new HttpException(
    //             {
    //             status: 400,
    //             error: {
    //                 message: '로그인 에러',
    //                 detail: error.message,
    //             },
    //             },
    //             400,
    //         );
    //     }
    //   }
}
