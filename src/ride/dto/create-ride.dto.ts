import { IsDate, IsInt, IsNumber, IsString, Max, Min } from "class-validator"

export class CreateRideDto {
  @IsString()
  driverId:string;
  @IsString()
  origin:string;
  @IsString()
  destination:string;
  @IsDate()
  date:Date;
  @IsString()
  time:string;
  @IsNumber()
  @Min(1200)
  @Max(1500)
  seats:number;
  @IsNumber()
  @Min(1200)
  @Max(1500)
  availableSeats:number;
}
