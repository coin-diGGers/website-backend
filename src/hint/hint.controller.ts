import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/admin/authguard/authguard';
import { HintService } from './hint.service';
import { HintDto } from './hintDto/hint.dto';

@Controller('')
export class HintController {
    constructor(private readonly hintService: HintService) {}

    @Get('')
    async agencyURLInfo(): Promise<any> {
      const getagencyInfo = await this.hintService.agencyURLInfo();

      return { agencyData: getagencyInfo };
    }

    @UseGuards(AuthGuard)
    @Post('/diggers/rhksflwkaksemdfhrgkftndlTsmsvpdlwl')
    async agencyURLPost(@Body() hintDto: HintDto): Promise<any> {
      const postHint = await this.hintService.postHint(hintDto);

      return { msg: '등록완료'}
    }
}
