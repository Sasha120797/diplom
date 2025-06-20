import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ReguestResetPasswordDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
