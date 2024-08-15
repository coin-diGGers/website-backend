import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hint } from 'src/hint/entities/hint.entity';
import { Treasure } from 'src/hint/entities/treasure.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExtensionService {
    constructor(
      @InjectRepository(Hint)
      private hintRepository: Repository<Hint>,
      @InjectRepository(Treasure)
      private treasureRepository: Repository<Treasure>
    ) {}

    // 로직 추가
    // 만약 등록한 힌트의 agency_id와 찾은 보물 treasure 테이블의 agency_id가 동일할 때 hint 테이블에 등록된 agency_id의 데이터 지우기
    async treasureSubmit(treasureDto): Promise<any> {
        try {
            const { agency_name, coin_name, coin_ammount, coin_address, agency_unique_number } = treasureDto;

            const submittedTreasure = this.treasureRepository.create({
                agency_name, 
                coin_name, 
                coin_ammount, 
                coin_address,
                agency_unique_number
            })

            const savedTreasure = await this.treasureRepository.save(submittedTreasure);

            // 힌트 테이블에서 agency_unique_number가 같은 데이터 삭제
            await this.hintRepository.delete({ agency_unique_number });

            return savedTreasure;

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
