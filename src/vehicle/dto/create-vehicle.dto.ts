import { IsString } from "class-validator"

export class CreateVehicleDto {
  @IsString()
  driverId  :  string;
  @IsString()
  brand     :  string;
  @IsString()
  model     :  string;
  @IsString()
  plate     :  string; 
  @IsString()
  color    :   string;
}
