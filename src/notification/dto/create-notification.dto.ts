import { IsString } from "class-validator"

export class CreateNotificationDto {
@IsString()
  profileId :string;
  @IsString()
  title     :string;
  @IsString()
  message   :string;
}
