import { IsString } from "class-validator";

export class LoginAdminDto {
  @IsString()
  id: string;

  @IsString()
  pw: string;
}
