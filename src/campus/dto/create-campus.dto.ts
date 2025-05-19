import { IsOptional, IsString } from "class-validator"

export class CreateCampusDto {
  @IsString()
  name      :  string;
  @IsString()
  address   : string;
  @IsString()
  city      : string;
  @IsOptional()
  @IsString()
  image?: string;
}
