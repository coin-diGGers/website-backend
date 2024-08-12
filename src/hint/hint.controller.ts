import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/admin/authguard/authguard';
import { HintService } from './hint.service';
import { HintDto } from './dto/hint.dto';

@Controller('')
export class HintController {
    constructor(private readonly hintService: HintService) {}

    @Get('main')
    async agencyURLInfo(): Promise<any> {
      const getagencyInfo = await this.hintService.agencyURLInfo();

      return { agencyData: getagencyInfo };
    }

    @UseGuards(AuthGuard)
    @Post('/diggers/rhksflwkaksemdfhrgkftndlTsmsvpdlwl')
    async agencyURLPost(@Body() hintDto: HintDto): Promise<any> {
      await this.hintService.postHint(hintDto);

      return { msg: '등록완료'}
    }

    @UseGuards(AuthGuard)
    @Get('/diggers/rhksflwkaksqhftndlTsmswlrkqwnth')
    async foundersAddress(): Promise<any> {
      const getagencyInfo = await this.hintService.foundersAddress();

      return { walletAddressData: getagencyInfo };
    }

    @UseGuards(AuthGuard)
    @Patch('/diggers/rhksflwkaksdhksfysnfmftndlTekd/:founder_id')
    async withdrawComplete(@Param('founder_id') founder_id: number): Promise<any> {
      const withdrawComplete = await this.hintService.withdrawComplete(founder_id);

      return { walletAddressData: withdrawComplete };
    }
}
