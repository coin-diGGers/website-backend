import { All, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hint } from './entities/hint.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HintService {
    constructor(
        @InjectRepository(Hint)
        private hintRepository: Repository<Hint>
    ) {}

    async agencyURLInfo(): Promise<any> {
        try {
            const agencyURL = await this.hintRepository.find()
            return agencyURL
        } catch (error) {
            throw new HttpException(
              {
                status: 400,
                error: {
                  message: '힌트 URL 조회 에러',
                  detail: error.message,
                },
              },
              400,
            );
          }
    }
}
