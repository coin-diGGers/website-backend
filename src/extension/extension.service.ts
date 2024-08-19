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

    async treasureSubmit(treasureDto): Promise<any> {
        try {
            const { agency_name, coin_name, coin_ammount, coin_address, agency_unique_number } = treasureDto;

            // Treasure가 이미 등록된 경우 예외 처리
            const existingTreasure = await this.treasureRepository.findOne({ where: { agency_unique_number } });
            if (existingTreasure) {
                throw new HttpException('This treasure has already been claimed', 400);
            }

            const submittedTreasure = this.treasureRepository.create({
                agency_name, 
                coin_name, 
                coin_ammount, 
                coin_address,
                agency_unique_number,
                found: true, // Treasure를 찾은 것으로 표시
                withdraw_status: false,
            });

            const savedTreasure = await this.treasureRepository.save(submittedTreasure);

            // 힌트 테이블에서 agency_unique_number가 같은 데이터 삭제
            await this.hintRepository.delete({ agency_unique_number });

            return savedTreasure;

        } catch (error) {
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

    // Treasure 상태 확인
    async checkTreasureStatus(agency_unique_number: number): Promise<any> {
        // const uniqueNumberTrueOrFalse = await this.treasureRepository.find({where: { agency_unique_number }})
        const treasure = await this.treasureRepository.findOne({ where: { found: true, agency_unique_number } });
        return !!treasure;
    }
}