import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExtensionService } from './extension.service';
import { TreasureDto } from './dto/treasure.dto';

@Controller('extension')
export class ExtensionController {
    constructor(private readonly extensionService: ExtensionService) {}

    @Post('/')
    async treasureSubmit(@Body() treasureDto: TreasureDto): Promise<any> {
        await this.extensionService.treasureSubmit(treasureDto)

        return { msg: "등록 완료" }
    }

    @Get('/status/:agency_unique_number')
    async checkStatus(@Param('agency_unique_number') agency_unique_number: number): Promise<any> {
        const isFound = await this.extensionService.checkTreasureStatus(agency_unique_number);
        return { isFound };
    }
}
