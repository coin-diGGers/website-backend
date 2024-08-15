import { Body, Controller, Post } from '@nestjs/common';
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
}
