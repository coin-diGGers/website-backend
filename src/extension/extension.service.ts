import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Treasure } from 'src/hint/entities/treasure.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExtensionService {
    constructor(
        @InjectRepository(Treasure)
        private treasureRepository: Repository<Treasure>
    ) {}

    // 로직 추가
    // 만약 등록한 힌트의 agency_id와 찾은 보물 treasure 테이블의 agency_id가 동일할 때 hint 테이블에 등록된 agency_id의 데이터 지우기
    async treasureSubmit(treasureDto): Promise<any> {
        try {
            const { agency_name, coin_name, coin_ammount, coin_address } = treasureDto;

            const submittedTreasure = this.treasureRepository.create({
                agency_name, 
                coin_name, 
                coin_ammount, 
                coin_address
            })

            return await this.treasureRepository.save(submittedTreasure)

        }catch (error) {
          throw new HttpException(
            {
              status: 400,
              error: {
                message: '보물 등록 에러',
                detail: error.message,
              },
            },
            400,
          );
        }
    }
}
