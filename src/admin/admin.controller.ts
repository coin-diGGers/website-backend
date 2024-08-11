import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { LoginAdminDto } from './admin.dto/loginadmin.dto';
import { AuthGuard } from './authguard/authguard';

@Controller('')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post('/diggers/rhksflwkaksfhrmdlsgkftndlTsmsvpdlwl')
    async adminLogin(@Body() body): Promise<any> {
        const loggedIn = await this.adminService.adminLogin(body);
        return { token: loggedIn.token };
    }
}
