import { IsNumber, IsString } from "class-validator";

export class HintDto {
  @IsString()
  agency_name: string;

  @IsString()
  coin_name: string;

  @IsNumber()
  coin_ammount: number;

  @IsString()
  url: string;
}
