import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { LoginAdminDto } from './admin.dto/loginadmin.dto';

@Controller('diggers')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    // @Post('/rhksflwkaksfhrmdlsgkftndlTsmsvpdlwl')
    // async adminLogin(@Body() body:LoginAdminDto): Promise<any> {
    //   const loggedIn = await this.adminService.adminLogin(body);
    //   return {  };
    // }
}
