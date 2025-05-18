import { IsString } from "class-validator"

export class CreateBookingDto {
  @IsString()
  userId   :  string;
  @IsString()
  rideId   :  string;
}
