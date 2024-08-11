import { All, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hint } from './entities/hint.entity';
import { Repository } from 'typeorm';
import { HintDto } from './hintDto/hint.dto';

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

    async postHint(hintDto: HintDto): Promise<any> {
      try {
        const { agency_name, coin_name, coin_ammount, url } = hintDto;
          
        const createHint = this.hintRepository.create({
          agency_name, 
          coin_name, 
          coin_ammount, 
          url
        })

        return await this.hintRepository.save(createHint);

      } catch (error) {
          throw new HttpException(
            {
              status: 400,
              error: {
                message: '힌트 URL 등록 에러',
                detail: error.message,
              },
            },
            400,
          );
        }
  }
}
