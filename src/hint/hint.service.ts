import { All, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hint } from './entities/hint.entity';
import { Repository } from 'typeorm';
import { HintDto } from './dto/hint.dto';
import { Treasure } from './entities/treasure.entity';

@Injectable()
export class HintService {
    constructor(
        @InjectRepository(Hint)
        private hintRepository: Repository<Hint>,
        @InjectRepository(Treasure)
        private treasureRepository: Repository<Treasure>
    ) {}

    async agencyURLInfo(): Promise<any> {
        try {
            const agencyURL = await this.hintRepository.find({
              order: {agency_id:'DESC'}
            })
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

  async foundersAddress(): Promise<any> {
    try {
      const walletAddress = await this.treasureRepository.find();
      return walletAddress


    } catch (error) {
        throw new HttpException(
          {
            status: 400,
            error: {
              message: '보물 찾은 사용자의 지갑 주소 조회 에러',
              detail: error.message,
            },
          },
          400,
        );
      }
  }

  async withdrawComplete(founder_id: number): Promise<any> {
    try {
      const founders = await this.treasureRepository.find({where: { founder_id }});

      if (!founders) {
        throw new HttpException(
          {
            status: 404,
            error: {
              message: '해당 창립자를 찾을 수 없습니다.',
              detail: `창립자 ID: ${founder_id}`,
            },
          },
          404,
        );
      }

      const founder = founders[0]; 

      founder.withdraw_status = !founder.withdraw_status;
  
      await this.treasureRepository.save(founder);
  
      return founder.withdraw_status;
    } catch (error) {
        throw new HttpException(
          {
            status: 400,
            error: {
              message: '송금 완료, 미완료 에러',
              detail: error.message,
            },
          },
          400,
        );
      }
  }
}
