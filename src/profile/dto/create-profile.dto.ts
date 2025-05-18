import { IsEmail, IsString } from "class-validator"

export class CreateProfileDto{

  @IsString()
  userId :string;    
  @IsString()
  name:string;
  @IsString()
  lastName:string;
  @IsString()
  @IsEmail()
  email:string;
  @IsString()    
  phone:string;
  @IsString()
  bio:string;
  @IsString()
  avatarUrl :string;
}

