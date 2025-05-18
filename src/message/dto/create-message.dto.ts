import { IsInt, IsNumber, IsString, Max, Min } from "class-validator"

export class CreateMessageDto {
  @IsNumber()
  @Min(1500)
  @Max(1800)
  senderId  : number;
  @IsNumber()
  @Min(1500)
  @Max(1800)
  receiverId: number;
  @IsString()
  content   : string;
}
