import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  username: string;
}
