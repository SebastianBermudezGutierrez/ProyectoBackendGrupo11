import { IsNumber, IsString, Max, Min } from "class-validator"

export class CreateReviewDto {
  @IsString()
  rideId    : string;
  @IsString()
  reviewerId :string;
  @IsNumber()
  @Min(1500)
  @Max(1800)
  rating    : number;
  @IsString()
  comment  :  string;
}
