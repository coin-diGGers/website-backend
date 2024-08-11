import { Controller, Get } from '@nestjs/common';
import { HintService } from './hint.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('BOARD')
@Controller('')
export class HintController {
    constructor(private readonly hintService: HintService) {}

    @Get('/main')
    @ApiOperation({
      summary: 'agencyURL',
      description: '버튼이 숨겨진 위치에 대한 힌트 URL',
    })
    @ApiResponse({ status: 200, description: '버튼이 숨겨진 위치에 대한 힌트 URL' })
    async agencyURLInfo(): Promise<any> {
      const getagencyInfo = await this.hintService.agencyURLInfo();
    //   const getBoardCount = await this.boardService.board1PageCount();
      return { agencyData: getagencyInfo };
    }
}
