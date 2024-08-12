import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';


@Controller('')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post('/diggers/rhksflwkaksfhrmdlsgkftndlTsmsvpdlwl')
    async adminLogin(@Body() body): Promise<any> {
        const loggedIn = await this.adminService.adminLogin(body);
        return { token: loggedIn.token };
    }
}
