import { IsNumber, IsString } from "class-validator";

export class TreasureDto {
  @IsNumber()
  coin_ammount: number;

  @IsString()
  coin_name: string;

  @IsString()
  agency_name: string;

  @IsString()
  coin_address: string;
}
